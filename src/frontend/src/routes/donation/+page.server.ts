import { db } from '$lib/server/db';
import type { Actions, PageServerLoad } from './$types';
import { donationsTable } from '$lib/server/schema';
import { redirect } from '@sveltejs/kit';
export const prerender = false;


console.log('process.env.BUILD_MODE', process.env.BUILD_MODE);

export const load: PageServerLoad = async () => {
    console.log('Loading donation page');
  return {};
};


export const actions: Actions = {
    donate: async ({ request }) => {
        console.log('Processing donation action');
        if (process.env.BUILD_MODE === 'true') {
            console.log('Skipping database actions during build');
            return { success: false, message: 'Build mode: action skipped' }; 
        }
        const data = await request.formData();
        const gender = Number(data.get('gender'));
        const age = Number(data.get('age'));
        const lang = Number(data.get('lang'));
        const email = String(data.get('email'));
        const country = String(data.get('country'));
        await db.insert(donationsTable).values({
            gender,
            age,
            lang,
            email,
            country
        });
    console.log('Donation recorded successfully');
    throw redirect(303, '/');
    }
};
