<script>
  import { Card } from 'flowbite-svelte';
</script>

<div class="flex justify-center items-center flex-col p-8 mb-auto">

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full max-w-7xl">
  <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/about" img="/images/pexels-suzyhazelwood-1768060.jpg">
    <div class="m-1">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kommunikation mittels Email</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Vor nunmehr 30 Jahren begann der Siegeszug der Email. Seitdem hat die 
        Email-Kommunikation mehr und mehr Briefe ersetzt. Sprachlich unterscheiden sich Emails und Briefe in vielen Aspekten.</p>
    </div>
  </Card>
  <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/donation" img="/images/Alle_Hintergrundbilder.svg">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Datenspende</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Um Emails zu analysieren, benötigen wir Emails als Korpus. 
        Wir sind auf Ihre Email-Spenden angewiesen. Leisten Sie einen wertvollen Beitrag zur Forschung und  helfen Sie, Email-Kommunikation besser zu verstehen!</p>
    </div>
  </Card>
    <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/tutorial">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tutorial</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">...</p>
    </div>
  </Card>
  <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/blog">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">...</p>
    </div>
  </Card>
</div>


</div>