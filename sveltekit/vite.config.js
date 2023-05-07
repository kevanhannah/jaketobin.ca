import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [sveltekit()],
});
