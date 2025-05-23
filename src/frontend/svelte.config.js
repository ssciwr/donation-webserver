import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
}

export default {
	extensions: [".svelte", ".md"],
	preprocess: [vitePreprocess({ script: true }), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({
			out: 'dist',
			precompress: true,
			envPrefix: ''
		})
	}
};

