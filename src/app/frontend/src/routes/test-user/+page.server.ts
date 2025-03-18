import { db } from '$lib/server/db';
import { asc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { donationsTable } from '$lib/server/schema';
export const prerender = false;




const users = await db.select().from(donationsTable);
console.log('Getting all users from the database: ', users)

// export const actions: Actions = {
// 	default: async ({ request }) => {
// 		const data = await request.formData();

// 		const id = Number(data.get('id'));

// 		await db.insert(donationsTable).values({
// 			id
// 		});
// 	}
// };