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

  <h1 class="mb-4 text-4xl font-extrabold center leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Projekt MailCom</h1>

</main>



