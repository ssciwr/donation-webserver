<script lang="ts">
	import { Button, Modal, Label, Input} from 'flowbite-svelte'
  import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
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

<form method="POST" action="?/contact" use:enhance>
  <div class="mb-6">
  <Label for="email" class="block mb-2 text-gray-100">Your email address</Label>
	<Input id="email" type="email" name="email" required placeholder="name@email.com" class="w-200 center">
    <EnvelopeSolid slot="left" class="w-4 h-4" />
  </Input>  
</div>
	<Label for="message" class="block mb-2 text-gray-100">Your message</Label>
	<Input type="text" placeholder="Your message" name="message" required class="w-80"/>
  <Button on:click={() => defaultModal = true} type="submit" class='mb-4'>Send message</Button>
</form>

