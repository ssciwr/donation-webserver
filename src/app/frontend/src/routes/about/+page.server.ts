import { db } from '$lib/server/db';
import type { Actions, PageServerLoad } from './$types';
import { newsletterTable } from '$lib/server/schema';
export const prerender = false;



export const load: PageServerLoad = async () => {
    const users = await db.select().from(newsletterTable);
    console.log('Getting all users from the database: ', users);
    return {
        users
    };
};


export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = String(data.get('email'));
        await db.insert(newsletterTable).values({
            email,
        });
    }
};