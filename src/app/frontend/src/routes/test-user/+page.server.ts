import { db } from '$lib/server/db';
import { asc } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { donationsTable } from '$lib/server/schema';

export const load: PageServerLoad = async () => {
	const users = await db.query.donationsTable.findMany({
		orderBy: [asc(donationsTable.id)]
	});

	return { users };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const id = Number(data.get('id'));

		await db.insert(donationsTable).values({
			id
		});
	}
};