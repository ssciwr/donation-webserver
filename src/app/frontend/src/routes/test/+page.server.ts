import type { Actions } from './$types';

export const actions = {
    default: async (event) => {
        try {
            // TODO log the user in
            // Example: const user = await loginUser(event);
            console.log('Event:', event); // Log the event for debugging
        } catch (error) {
            console.error('Error logging in:', error);
            // Optionally, you can throw a custom error or return a specific response
            throw new Error('Failed to log in');
        }
    }
} satisfies Actions;