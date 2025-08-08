<script>
  import { Card } from 'flowbite-svelte';
  import { t } from '$lib/i18n';
</script>

<div class="flex justify-center items-center flex-col p-8 mb-auto">

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full max-w-7xl">
  <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/about" img="/images/pexels-suzyhazelwood-1768060.jpg">
    <div class="m-1">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{$t.homepage.emailCommunication.title}</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">{$t.homepage.emailCommunication.description}</p>
    </div>
  </Card>
  <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/donation" img="/images/Alle_Hintergrundbilder.svg">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{$t.homepage.dataSpende.title}</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">{$t.homepage.dataSpende.description}</p>
    </div>
  </Card>
    <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/tutorial">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{$t.homepage.tutorial.title}</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">{$t.homepage.tutorial.description}</p>
    </div>
  </Card>
  <Card class="max-w-[500px] min-w-[300px] p-1 bg-custom-100 border-primary-900" href="/blog">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{$t.homepage.blog.title}</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">{$t.homepage.blog.description}</p>
    </div>
  </Card>
</div>


</div>