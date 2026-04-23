<script lang="ts">
    import { Button, Label, Input, Textarea, Alert } from 'flowbite-svelte';
    import { t } from '$lib/i18n';
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';

    const STORAGE_KEY = 'contact-form-draft';

    let formResult: { success?: boolean; message?: string } | null = $state(null);
    let submitting = $state(false);
    let name = $state('');
    let email = $state('');
    let subject = $state('');
    let message = $state('');

    function saveDraft() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email, subject, message }));
    }

    function clearDraft() {
        localStorage.removeItem(STORAGE_KEY);
        name = '';
        email = '';
        subject = '';
        message = '';
    }

    onMount(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const draft = JSON.parse(saved);
                name = draft.name ?? '';
                email = draft.email ?? '';
                subject = draft.subject ?? '';
                message = draft.message ?? '';
            } catch {
                localStorage.removeItem(STORAGE_KEY);
            }
        }
    });
</script>

<main class='p-8 mb-auto' data-testid="page-contact">
<div class="flex justify-center flex-col p-8 mb-auto rounded-lg" style="background-color: rgba(254, 242, 242, 0.6);">

	<h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.contact.title}</h1>
	<p class="text-center text-gray-700 mt-4 mb-8">{$t.contact.description}</p>

	{#if formResult?.success}
		<Alert color="green" class="mb-4">
			<span class="font-medium">{$t.contact.form.successMessage}</span>
		</Alert>
	{:else if formResult && !formResult.success}
		<Alert color="red" class="mb-4">
			<span class="font-medium">{$t.contact.form.errorMessage}</span>
		</Alert>
	{/if}

	<form
		action="?/contact"
		method="POST"
		use:enhance={() => {
			submitting = true;
			return async ({ result, update }) => {
				submitting = false;
				if (result.type === 'success') {
					formResult = result.data as { success: boolean; message?: string };
					if (formResult?.success) {
						clearDraft();
					}
					await update({ reset: !!formResult?.success });
				} else if (result.type === 'failure') {
					formResult = result.data as { success?: boolean; message?: string };
					await update();
				} else {
					formResult = { success: false, message: 'send_failed' };
				}
			};
		}}
		class="flex flex-col space-y-4 max-w-lg mx-auto w-full"
		data-testid="contact-form"
	>
		<!-- Honeypot -->
		<div class="hidden" aria-hidden="true">
			<input type="text" name="website" tabindex="-1" autocomplete="off" />
		</div>

		<Label class="space-y-2">
			<span>{$t.contact.form.name}</span>
			<Input type="text" name="name" required data-testid="contact-name" bind:value={name} on:input={saveDraft} />
		</Label>

		<Label class="space-y-2">
			<span>{$t.contact.form.email}</span>
			<Input type="email" name="email" required placeholder="name@example.com" data-testid="contact-email" bind:value={email} on:input={saveDraft} />
		</Label>

		<Label class="space-y-2">
			<span>{$t.contact.form.subject}</span>
			<Input type="text" name="subject" required data-testid="contact-subject" bind:value={subject} on:input={saveDraft} />
		</Label>

		<Label class="space-y-2">
			<span>{$t.contact.form.message}</span>
			<Textarea name="message" rows={6} required data-testid="contact-message" bind:value={message} on:input={saveDraft} />
		</Label>

		<Button type="submit" class="bg-primary-900" disabled={submitting} data-testid="contact-submit">
			{submitting ? $t.contact.form.sending : $t.contact.form.send}
		</Button>
	</form>

</div>
</main>
