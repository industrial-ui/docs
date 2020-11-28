import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import config from 'sapper/config/rollup';
import pkg from './package.json';

const { createPreprocessors } = require('./svelte.config.js');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const sourcemap = dev ? 'inline' : false;
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const preprocess = createPreprocessors({ sourceMap: !!sourcemap });

const warningIsIgnored = (warning) => warning.message.includes(
	'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification',
) || warning.message.includes('Circular dependency: node_modules');

// Workaround for https://github.com/sveltejs/sapper/issues/1266
const onwarn = (warning, _onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || warningIsIgnored(warning) || console.warn(warning.toString());

export default {
	client: {
		input: config.client.input().replace(/\.js$/, '.ts'),
		output: { ...config.client.output(), sourcemap },
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
      alias({
        entries: [
          { find: 'common', replacement: path.resolve(__dirname, '..', 'common/') },
        ]
      }),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess,
			}),
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),
			commonjs({
				sourceMap: !!sourcemap,
			}),
			typescript({
				noEmitOnError: !dev,
				sourceMap: !!sourcemap,
        include: ['**/*.ts', '../common/**/*.ts'],
			}),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead',
					}],
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true,
					}],
				],
			}),

			!dev && terser({
				module: true,
			}),
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: { server: config.server.input().server.replace(/\.js$/, '.ts') },
		output: { ...config.server.output(), sourcemap },
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'module.require': 'require',
			}),
      alias({
        entries: [
          { find: 'common', replacement: path.resolve(__dirname, '..', 'common/') },
        ]
      }),
			svelte({
				generate: 'ssr',
				dev,
				preprocess,
			}),
			resolve({
				dedupe: ['svelte'],
			}),
			commonjs({
				sourceMap: !!sourcemap,
			}),
			typescript({
				noEmitOnError: !dev,
				sourceMap: !!sourcemap,
        include: ['**/*.ts', '../common/**/*.ts'],
			}),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives')), // eslint-disable-line global-require
		),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	/*serviceworker: {
		input: config.serviceworker.input().replace(/\.js$/, '.ts'),
		output: { ...config.serviceworker.output(), sourcemap },
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			commonjs({
				sourceMap: !!sourcemap,
			}),
			typescript({
				noEmitOnError: !dev,
				sourceMap: !!sourcemap,
			}),
			!dev && terser(),
		],

		preserveEntrySignatures: false,
		onwarn,
	},*/
};
