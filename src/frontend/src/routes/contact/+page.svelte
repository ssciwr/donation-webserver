<script lang="ts">
	import { Button, Modal, Label, Input} from 'flowbite-svelte'
  import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
	let { form }: { form: ActionData } = $props();
  let defaultModal: boolean = $state(false);
</script>

<main class='p-8 h-auto'>

  <h1 class="mb-4 text-4xl font-extrabold center leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Mailcom Projekt</h1>
  <h3 class="text-gray-100">
    Prof. Dr. Sybille Große <br>
    Laura Gärtner
  </h3>
<p class="text-gray-100"> 
  Romanisches Seminar, Universität Heidelberg, Seminarstraße 3, 69117 Heidelberg
</p>
</main>

<Modal title="Ihre Nachricht wurde gesendet." bind:open={defaultModal} autoclose={true}>
  {#if form?.success}
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Ihre Email Adresse: {form.email}
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
     Ihre Nachricht: {form.message}
    </p>
    <Button>Ok</Button>
  {:else}
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Ihre Nachricht konnte nicht gesendet werden.
    </p>
    <Button type="button" color="alternative" on:click={() => defaultModal = false}>Abbrechem</Button>
  {/if}
</Modal>

<form method="POST" action="?/contact" use:enhance>
  <div class="mb-6">
  <Label for="email" class="block mb-2 text-gray-100">Ihre Email Adresse</Label>
	<Input id="email" type="email" name="email" required placeholder="name@email.com" class="w-200 center">
    <EnvelopeSolid slot="left" class="w-4 h-4" />
  </Input>  
</div>
	<Label for="message" class="block mb-2 text-gray-100">Ihre Nachricht</Label>
	<Input type="text" placeholder="Your message" name="message" required class="w-80"/>
  <Button on:click={() => defaultModal = true} type="submit" class='mb-4'>Nachricht senden</Button>
</form>

