import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter({
			edge: true,
			split: false,
		}),
		alias: {
			$components: './src/components',
		},
		prerender: {
			origin: 'https://sveltekit-prerender',
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
