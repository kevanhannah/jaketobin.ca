import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		sveltekit(),
		sentryVitePlugin({
			org: process.env.SENTRY_ORG,
			project: process.env.SENTRY_PROJECT,
			authToken: process.env.SENTRY_AUTH_TOKEN,
			sourcemaps: {
				assets: './build/**',
			},
		}),
	],
});
