<script>
  import { Heading, Button, Modal, ImagePlaceholder, TextPlaceholder } from 'flowbite-svelte'
  let defaultModal = false;
</script>

<Heading tag="h1" customSize="text-5xl">Mailcom project website</Heading>

<ImagePlaceholder divClass='my-4'/>
<Button color="primary" on:click={() => defaultModal = true} class='mb-4'>Default modal</Button>

<TextPlaceholder divClass='pb-8' size='xxl'/>


<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In illum ipsa aperiam impedit beatae voluptate mollitia quos qui ducimus omnis similique, atque praesentium optio corporis, alias id quibusdam! Veritatis, reprehenderit.
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In illum ipsa aperiam impedit beatae voluptate mollitia quos qui ducimus omnis similique, atque praesentium optio corporis, alias id quibusdam! Veritatis, reprehenderit.
  </p>
  <svelte:fragment slot='footer'>
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>


