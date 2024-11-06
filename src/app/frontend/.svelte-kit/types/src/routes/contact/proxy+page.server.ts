// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }: import('./$types').RequestEvent) => {
		const form = await request.formData();
		const email = form.get('email');
		const message = form.get('message');

		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!message) {
			return fail(400, { message, missing: true });
		}

		if (typeof email === 'string' && typeof message === 'string') {
			// Remember to obfuscate any real, personally identifiable information (PII) from logs,
			// which unauthorised personnel might have access to.
			console.log({ email, message });

			// Add logic here to process the contact form.
		}
 
		redirect(303, '/');
	}
};

;null as any as Actions;