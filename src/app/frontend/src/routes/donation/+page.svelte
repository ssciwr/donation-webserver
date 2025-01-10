<script lang="ts">
  import { Button, Modal, Label, Input, Checkbox, Img} from 'flowbite-svelte'
  let formModal: boolean = $state(false);
  let countryModal: boolean = $state(false);
  let emailModal: boolean = $state(false);

  function clickCountry() {
    alert("You clicked country!");
  }
</script>


<Button on:click={() => (formModal = true)}>Datenspende</Button>

<Modal bind:open={formModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Collect metadata</h3>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">Geschlecht</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center"><Checkbox class="p-3">m</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">f</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">d</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">Keine Angabe</Checkbox></li>
        </ul>
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Altersschritte</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center"><Checkbox class="p-3">&lt;20</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">21-30</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">31-40</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">41-50</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">51-60</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">&gt;60</Checkbox></li>
        </ul>
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Ist die Sprache, in der Sie schreiben, Ihre Muttersprache?</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center"><Checkbox class="p-3">Ja</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">Nein</Checkbox></li>
          <li class="flex items-center"><Checkbox class="p-3">?</Checkbox></li>
        </ul>
    <Button type="submit" class="w-full1" on:click={() => (countryModal = true)}>Weiter</Button>
  </form>
</Modal>

<Modal bind:open={countryModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <Label class="space-y-2">
      <span>Wo haben Sie die meisten Nachrichten verfasst?</span>
      <Input type="text" name="text" placeholder="•••••" required />
    </Label>
    <Img src="/images/europe.svg" alt="Europe map" class="w-full" usemap="#workmap"/>
    <Button type="submit" class="w-full1" on:click={() => (emailModal = true)}>Weiter</Button>
  </form>
</Modal>

<Modal bind:open={emailModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <Label class="space-y-2">
        <span>Ihre Email Adresse</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Subscribe to newsletter and updates</Checkbox>
    </div>
    <Button type="submit" class="w-full1" on:click={() => alert('Datenspende erfolgreich')}>Submit</Button>
  </form>
</Modal>
