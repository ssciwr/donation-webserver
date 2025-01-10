import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: [vitePreprocess({ script: true })],
  kit: {
    adapter: adapter({
			out: 'dist',
			precompress: true,
			envPrefix: ''
		})
	}
};