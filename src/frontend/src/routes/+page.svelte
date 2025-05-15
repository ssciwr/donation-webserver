<script>
  import './global.css';
  import { Button } from 'flowbite-svelte';
  import { goto } from '$app/navigation';

  function gotoDonate() {
    goto('/donation');
  }

</script>

<h1 class="mb-4 font-extrabold center leading-none tracking-tight text-gray-100 text-4xl">Projekt MailCom</h1>




 <a href="/about">
<figure class="max-w-lg">
<img class="h-auto max-w-full object-cover rounded-lg shadow-lg" 
     src="/images/pexels-suzyhazelwood-1768060.jpg" 
     alt="A stack of letters" 
     
/>
<figcaption class="mt-2 text-sm text-center text-gray-100">Photo by Suzy Hazelwood: https://www.pexels.com/photo/pile-of-letters-in-envelopes-1768060/"</figcaption>
</figure>
</a>

<a href="/donation">
  <p class="text-gray-100">Hier gehts zur Email Spende:
  <Button class="w-fit" on:click={gotoDonate}>
    Emails spenden
</Button>
</p>   

</a>
