import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
export const prerender = false;
import { sendMessage } from '../../lib/server/contact';
type Data = {
	success: boolean
	email: string
	message: string
	errors: Record<string, string>
  }
export const actions = {
	contact: async ({ request }) => {
		console.log('Contact action triggered');
		console.log('request:', request); // Log the event for debugging
		const formData = await request.formData();
		const email = formData.get('email') as string | null;
		const message = formData.get('message') as string | null;
		console.log('request:', formData); // Log the event for debugging
		console.log('message:', message); // Log the event for debugging
		console.log('email:', email); // Log the event for debugging
		// if (!email) {
		// 	return fail(400, { email, missing: true });
		// }
		// if (!message) {
		// 	return fail(400, { message, missing: true });
		// }

		// if (typeof email === 'string' && typeof message === 'string') {
		// 	// Remember to obfuscate any real, personally identifiable information (PII) from logs,
		// 	// which unauthorised personnel might have access to.
		// 	console.log({ email, message });

		// 	// Add logic here to process the contact form.
		// }
		// try {
		// 	// TODO save message
		// 	console.log('message saved:', message); // Log the event for debugging
		// 	} catch (error) {
		// 		console.error('Error saving message:', error);
		// 		// Optionally, you can throw a custom error or return a specific response
		// 		throw new Error('Failed to save message');
		// 	}
 
		// redirect(303, '/');
		const data: Data = {
			success: false,
			errors: {},
			email: '',
			message: ''
		  }
		data.success = true;
		data.email = email ?? '';
		data.message = message ?? '';
		return data;
	}
};

