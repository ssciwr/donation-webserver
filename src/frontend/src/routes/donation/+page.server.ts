import { db } from '$lib/server/db';
import type { Actions, PageServerLoad } from './$types';
import { donationsTable } from '$lib/server/schema';
export const prerender = false;


console.log('process.env.BUILD_MODE', process.env.BUILD_MODE);

export const load: PageServerLoad = async () => {
  return {};
};

export const actions: Actions = {
    default: async ({ request }) => {
        if (process.env.BUILD_MODE === 'true') {
            console.log('Skipping database actions during build');
            return;
        }
        const data = await request.formData();
        const gender = Number(data.get('gender'));
        const age = Number(data.get('age'));
        const lang = Number(data.get('lang'));
        const email = String(data.get('email'));
        const country = String(data.get('country'));
        console.log('Getting gender ', gender);
        console.log('Getting country ', country);
        await db.insert(donationsTable).values({
            gender,
            age,
            lang,
            email,
            country
        });
    return { success: true, message: 'Donation recorded successfully' };
    }
};