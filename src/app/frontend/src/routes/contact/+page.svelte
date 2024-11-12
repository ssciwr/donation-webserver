<script lang="ts">
	import { Button, Modal, Label, Input} from 'flowbite-svelte'
  import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
  let defaultModal: boolean = $state(false);
</script>

<Modal title="Your message has been sent." bind:open={defaultModal} autoclose={true}>
  {#if form?.success}
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Your email address: {form.email}
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
     Your message: {form.message}
    </p>
    <Button>Ok</Button>
  {:else}
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      There was an error sending your message.
    </p>
    <Button type="button" color="alternative" on:click={() => defaultModal = false}>Cancel</Button>
  {/if}
</Modal>

<form method="POST" action="?/contact" class="flex flex-col space-y-6" use:enhance>
  <Label for="email" class="block mb-2">Your email address</Label>
	<Input id="email" type="email" placeholder="xx@xxxx.xxx" name="email" required/>
	<Label for="message" class="block mb-2">Your message</Label>
	<Input type="text" placeholder="Your message" name="message" required/>
  <Button on:click={() => defaultModal = true} type="submit" class='mb-4'>Send message</Button>
</form>
