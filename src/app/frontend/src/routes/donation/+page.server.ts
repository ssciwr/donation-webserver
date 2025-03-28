import { db } from '$lib/server/db';
import type { Actions, PageServerLoad } from './$types';
import { donationsTable } from '$lib/server/schema';
export const prerender = false;



export const load: PageServerLoad = async () => {
    const users = await db.select().from(donationsTable);
    console.log('Getting all users from the database: ', users);

    return {
        users
    };
};


export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        const listi = Number(data.get('listi'));
        console.log('Getting listi ', listi);
        await db.insert(donationsTable).values({
            id
        });
    }
};