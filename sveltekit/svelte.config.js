import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const config = {
	compilerOptions: {
		enableSourcemap: true,
	},
	kit: {
		adapter: adapter({
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
