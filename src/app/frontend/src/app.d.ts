// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces


export {};
interface Post {
	title: string
	slug: string
	description: string
	image?: string
	date: string
	categories: string[]
	published: boolean
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}
