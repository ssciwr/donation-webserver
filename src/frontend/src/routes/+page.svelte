<script>
  import { Button, Card } from 'flowbite-svelte';
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>
<Button class="w-40 font-script bg-primary-800"  href="/donation" type="button">
  Emails spenden
</Button>
<div class="flex justify-center items-center flex-col p-8 mb-auto">
<h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl text-primary-800">Projekt MailCom</h1>

<div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
  <Card class="max-w-[500px] p-1" img="/images/pexels-suzyhazelwood-1768060.jpg">
    <div class="m-1">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kommunikation mittels Email</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Vor nunmehr 30 Jahren begann der Siegeszug der Email. Seitdem hat die 
        Email-Kommunikation mehr und mehr Briefe ersetzt. Sprachlich unterscheiden sich Emails und Briefe in vielen Aspekten.</p>
      <Button class="w-40 bg-primary-800" href="/about" type="button">
        Weiterlesen <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
      </Button>
    </div>
  </Card>
  <Card class="max-w-[500px] p-1" img="/images/Alle_Hintergrundbilder.svg">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Datenspende</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Um Emails zu analysieren, benötigen wir Emails als Korpus. 
        Wir sind auf Ihre Email-Spenden angewiesen. Leisten Sie einen wertvollen Beitrag zur Forschung und  helfen Sie, Email-Kommunikation besser zu verstehen!</p>
      <Button class="w-40 bg-primary-800" href="/donation" type="button">
        Emails spenden <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
      </Button>
    </div>
  </Card>
</div>


</div>