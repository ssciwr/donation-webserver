
import * as db from '$lib/server/database';
import type { ServerInit } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';


export const init: ServerInit = async () => {
	await db.connect();
};

export const handle: Handle = ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', get_lang(event))
	});
};