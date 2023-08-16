import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: true,
		}),
		alias: {
			$components: './src/components',
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
