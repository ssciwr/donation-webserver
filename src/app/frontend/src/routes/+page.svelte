<script>
  import { Button, Modal, Card } from 'flowbite-svelte'
  let defaultModal = false;
  import { Img } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import './global.css';
  import { goto } from '$app/navigation';

  function gotoDonate() {
    goto('/donation');
  }
</script>

<main class='p-8 h-auto'>

  <h1 class="mb-4 text-4xl font-extrabold center leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Mailcom project</h1>

  <div class="grid grid-cols-3 gap-4">
    <div>
      <Card href="/cards">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </Card>
  </div>
    <div>
      <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button class="w-fit" on:click={gotoDonate}>
        Donate<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
      </Button>
    </Card>
  </div>
    <div>
      <Card href="/cards" color="primary">
        <Img src="/images/background.png" 
          alt="sample 1" class="rounded-lg" 
          captionClass="absolute bottom-6 px-4 text-lg text-white" 
          caption="About" />
      </Card>
    </div>
  </div>

</main>


<Button color="primary" on:click={() => defaultModal = true} class='mb-4'>Default modal</Button>

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


