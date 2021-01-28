<template>
  <Layout class="article-page" :article="article">
    <article id="content">
      <h1>
        {{ article.title | tranlation }}
      </h1>
      <div v-if="article.article">
        <template v-for="(block, i) in article.article.blocks">
          <template v-if="block.type === 'paragraph'">
            <p :key="i" v-html="getTranslation(block.data.text)" />
          </template>

          <template v-if="block.type === 'header'">
            <component :is="'h' + block.data.level" :id="block.data.slug || ''" :key="i" v-html="getTranslation(block.data.text)" />
          </template>

          <template v-if="block.type === 'list'">
            <component :is="block.data.style === 'ordered' ? 'ol' : 'ul'" :key="i">
              <li v-for="(item, j) in block.data.items" :key="j" v-html="getTranslation(item)" />
            </component>
          </template>

          <template v-if="block.type === 'code'">
          <pre class="code">
            <code :class="block.data.codeLang" v-html="block.data.code" />
          </pre>
          </template>

          <template v-if="block.type === 'image'">
            <figure>
              <img :src="block.data.url" alt="" />
              <figcaption v-html="getTranslation(block.data.caption)" />
            </figure>
          </template>

          <template v-if="block.type === 'table'">
            <div class="table">
              <table v-if="block.data.content && block.data.content.length > 1">
                <thead>
                <tr v-for="(row, i) in block.data.content.slice(0, 1)" :key="'row' + i">
                  <th v-for="(cell, j) in row" :key="'row' + i + 'cell' + j" v-html="getTranslation(cell)" />
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, i) in block.data.content.slice(1)" :key="'row' + i">
                  <td v-for="(cell, j) in row" :key="'row' + i + 'cell' + j" v-html="getTranslation(cell)" />
                </tr>
                </tbody>
              </table>
            </div>
          </template>
        </template>
      </div>
    </article>

    <a :href="'https://editor.industrial-ui.com/?article=' + article.id" target="_blank" class="article-edit">
      <i class="gg-pen" />
      <span>Edit this article</span>
    </a>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import type {ArticleType, SupportedLanguages} from '../../../common/types';
  import articles from '../../../common/articles';
  import getTranslation from '../../../common/get-translation';
  import Layout from '~/components/Layout.vue';

  export default Vue.extend({
    components: {Layout},
    data () {
      return {
        article: {} as ArticleType,
      };
    },
    computed: {
      lang (): SupportedLanguages {
        return this.$route.params.lang as SupportedLanguages;
      },
    },
    async mounted () {
      const article = articles[this.$route.params.page as keyof typeof articles];
      this.article = ((await article()) as any).default;
    },
    methods: {
      getTranslation,
    },
  });
</script>

<style>
  .article-edit {
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .article-edit span {
    display: inline-block;
    margin-left: 30px;
    color: var(--text-color-secondary);
    font-size: 0.9em;
  }

  .gg-pen {
    position: relative;
    display: block;
    box-sizing: border-box;
    transform: rotate(-45deg) scale(0.8) translateY(15px);
    width: 14px;
    height: 4px;
    border-right: 2px solid transparent;
    box-shadow: 0 0 0 2px var(--text-color-secondary), inset -2px 0 0 var(--text-color-secondary);
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
  }
  .gg-pen::after,
  .gg-pen::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute
  }
  .gg-pen::before {
    background: var(--text-color-secondary);
    border-left: 0;
    right: -6px;
    width: 3px;
    height: 4px;
    border-radius: 1px;
    top: 0
  }
  .gg-pen::after {
    width: 8px;
    height: 7px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 7px solid var(--text-color-secondary);
    left: -11px;
    top: -2px
  }
</style>
