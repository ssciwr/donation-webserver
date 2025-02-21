import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"
import postcss from "@tailwindcss/postcss"

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
}

export default {
	extensions: [".svelte", ".md"],
	preprocess: [vitePreprocess({ script: true }), mdsvex(mdsvexOptions), postcss({})],
  kit: {
    adapter: adapter({
			out: 'dist',
			precompress: true,
			envPrefix: ''
		})
	}
};

