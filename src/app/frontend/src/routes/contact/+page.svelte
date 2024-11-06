<script lang="ts">
	import { Heading, Button, Modal, Label, Input} from 'flowbite-svelte'
	import type { ActionData } from './$types';

	export let form : ActionData;
	export let defaultModal = false;
	export let email = '';
	export let message = '';
	$: console.log(email, message);
</script>


<Modal title="Your message" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Your email address: {email}
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
   Your message: {message}
  </p>
  <svelte:fragment slot='footer'>
    <Button on:click={() => alert('Your message has been sent')}>Send message</Button>
    <Button color="alternative">Cancel</Button>
  </svelte:fragment>
</Modal>

<main>
<Heading tag="h1" customSize="text-5xl">Contact</Heading>

<form method="POST" action="?/contact">
	{#if form?.missing}<p class="error">The email field is required</p>{/if}
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
	<Label for="email" class="block mb-2">Your email address</Label>
	<Input id="email" type="email" maxLength="15" placeholder="xxx@xxx.xxx" required bind:value={email}/>
	<Label for="message" class="block mb-2">Your message</Label>
	<Input id="message" type="text" placeholder="Your message" required bind:value={message}/>
	<Button on:click={() => defaultModal = true} class='mb-4'>Send</Button>
</form>
</main>