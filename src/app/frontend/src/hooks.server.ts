
// import { db } from '$lib/server/db';
// import type { Handle } from '@sveltejs/kit';


// export const handle: Handle = ({ event, resolve }) => {
// 	return resolve(event, {
// 		transformPageChunk: ({ html }) => html.replace('%lang%', get_lang(event))
// 	});
// };


// export const handle = async ({event, resolve}) => {
// 	const dbConn = await db();
// 	event.locals.dbConn = dbConn;
// 	const response = await resolve(event);
// 	dbConn.release();
// 	return response;
// }