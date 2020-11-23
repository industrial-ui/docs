/* eslint-disable no-restricted-globals,@typescript-eslint/no-explicit-any */
import { timestamp, files, shell } from '@sapper/service-worker';

const ASSETS = `cache${timestamp}`;
const toCache = (shell as string[]).concat(files as string[]);

self.addEventListener('install', <EventType extends ExtendableEvent>(event: EventType) => {
	event.waitUntil(
		caches
			.open(ASSETS)
			.then((cache) => cache.addAll(toCache))
			.then(() => {
				(self as any as ServiceWorkerGlobalScope).skipWaiting();
			}),
	);
});

self.addEventListener('activate', <EventType extends ExtendableEvent>(event: EventType) => {
	event.waitUntil(
		caches.keys().then(async (keys) => {
			// delete old caches
			for (const key of keys) { // eslint-disable-line no-restricted-syntax
				if (key !== ASSETS) await caches.delete(key); // eslint-disable-line no-await-in-loop
			}

			(self as any as {clients: Clients}).clients.claim();
		}),
	);
});
