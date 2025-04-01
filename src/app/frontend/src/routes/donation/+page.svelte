<script lang="ts">
  import { Button, Modal, Label, Radio, Input, Checkbox} from 'flowbite-svelte'
	import type { ActionData } from './$types';
  import Map from '$lib/Map2.svelte'
  let formModal: boolean = $state(false);
  let countryModal: boolean = $state(false);
  let forwardEmailModal: boolean = $state(false);
  let emailModal: boolean = $state(false);
  let disclosureModal: boolean = $state(false);
	const { data } = $props();

	const ids = data.users;
  let id: number = $state(0);
  let gender: number = $state(0);
  let age: number = $state(0);
  let lang: number = $state(0);
  let email: string = $state('');
  let country: string = $state('');
  let accept_disclosure: boolean = $state(false);
</script>

{#each ids as id}
	<div>
		<h1>ID: {id.id}</h1>
		<h1>gender: {id.gender}</h1>
	</div>
{/each}

<Button on:click={() => (formModal = true)}>Datenspende</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#" 
  onsubmit={() => {
    countryModal = true; // Open the next modal
    formModal = false; // Close the current modal
  }}>
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Collect metadata</h3>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">Geschlecht</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value="1">m</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value="2">f</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value=3>d</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value=0>Keine Angabe</Radio>
          </li>
        </ul>
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Altersschritte</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value="1">&lt;20</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value="2">21-30</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value=3>31-40</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value=4>41-50</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value=5>51-60</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value=6>&gt;60</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value=0>Keine Angabe</Radio>
          </li>
        </ul>
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">Ist die Sprache, in der Sie schreiben, Ihre Muttersprache?</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center">
            <Radio name="lang" class="p-3" bind:group={lang} value=1>Ja</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="lang" class="p-3" bind:group={lang} value=2>Nein</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="lang" class="p-3" bind:group={lang} value=0>Keine Angabe</Radio>
          </li>
        </ul>
        <Button type="submit" class="w-full1">Weiter</Button>
  </form>
</Modal>

<Modal bind:open={countryModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#"
    onsubmit={() => {
    forwardEmailModal = true; // Open the next modal
    countryModal = false; // Close the current modal
    }}>
    <Label class="space-y-2">
      <span>Wo haben Sie die meisten Nachrichten verfasst?</span>
    </Label>
    <Map /> 
    <!-- still missing the country selection -->
    <Button type="submit" class="w-full1" >Weiter</Button>
  </form>
</Modal>

<Modal bind:open={forwardEmailModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#" method="POST">
    <Label class="space-y-2">
        <span>Ihre Email Adresse von der Sie spenden:</span>
      <Input type="email" name="email" bind:value={email} placeholder="name@company.com" required />
    </Label>
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Falls Sie Ihre Spende zu 
      einem späteren Zeitpunkt widerrufen möchten,
      nutzen Sie bitte die ID, die Sie in der Bestätigungsemail erhalten haben.
    </h3>
    <input required type="int" name="id" />
    <input type="hidden" name="gender" value={gender} />
    <input type="hidden" name="age" value={age} />
    <input type="hidden" name="lang" value={lang} />
    {#if accept_disclosure}
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Um Ihre Emails zu spenden,
      leiten Sie diese bitte an folgende Adresse weiter: <br>
      mailcom-donation@rose.uni-heidelberg.de
    </h3>
      <Button type="submit" class="w-full1" on:click={() => (emailModal = true)}>Einreichen</Button>
    {:else}
      <Button class="w-full1" on:click={() => (disclosureModal = true)}>Weiter</Button>
    {/if}
  </form>
</Modal>

<Modal bind:open={disclosureModal} size="xs" autoclose={true} class="w-full">
  <h1 class="text-base leading-relaxed text-black">Information und Einwilligungserklärung zum wissenschaftlichen Forschungsvorhaben 
      "Schreiben nach der Briefkultur: MailCom"</h1>
    <h3 class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Information zum wissenschaftlichen Forschungsvorhaben:</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">...</p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Datenschutz:</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Mir ist bekannt, dass bei dieser Studie personenbezogene Daten verarbeitet werden sollen. 
      Ich wurde darüber aufgeklärt und stimme freiwillig zu, dass meine in der Studie erhobenen Daten, 
      insbesondere Angaben über meine Gesundheit, meine ethnische Herkunft zu den in der Informationsschrift 
      beschriebenen Zwecken in pseudonymisierter Form aufgezeichnet und ausgewertet werden können. 
      Die Verarbeitung der Daten erfolgt nach gesetzlichen Bestimmungen und setzt gemäß Art. 6 Abs. 1 lit. a 
      der Datenschutz-Grundverordnung folgende Einwilligungs-erklärung voraus:</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Ich wurde darüber aufgeklärt und stimme freiwillig zu, dass meine in der Studie erhobenen Daten, zu den 
      in der Informationsschrift beschriebenen Zwecken in pseudonymisierter Form aufgezeichnet und ausgewertet 
      werden können. Bei der Veröffentlichung von Ergebnissen der Studie wird mein Name ebenfalls nicht genannt. 
      Die personenbezogenen Daten werden anonymisiert. Mir ist bekannt, dass diese Einwilligung jederzeit 
      schriftlich oder mündlich ohne Angabe von Gründen widerrufen werden kann, ohne dass mir dadurch 
      Nachteile entstehen. Die Rechtmäßigkeit, der bis zum Widerruf erfolgten Datenverarbeitung wird 
      davon nicht berührt. In diesem Fall kann ich entscheiden, ob die von mir erhobenen Daten gelöscht 
      werden sollen oder weiterhin für die Zwecke der Studie verwendet werden dürfen.</p>
      <form class="flex flex-col space-y-6" action="#">
      <div class="flex items-start">
        <Checkbox required bind:checked={accept_disclosure}>
          Ich habe die Informationen zum Datenschutz gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu. </Checkbox>
          <!-- Ich habe die <a href="/about" class="text-blue-600 dark:text-blue-500 hover:underline">Informationen zum Datenschutz</a> gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu. </Checkbox> -->
      </div>
      </form>
    <svelte:fragment slot="footer">
      <Button >Ich akzeptiere und reiche meine Daten ein</Button>
      <Button color="alternative" on:click={() => (forwardEmailModal = false)}>Ablehnen</Button>
    </svelte:fragment>
</Modal>

<Modal bind:open={emailModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <Label class="space-y-2">
        <span>Falls Sie unseren Newsletter und Projektneuigkeiten erhalten möchten, 
          geben Sie bitte Ihre Email Adresse an:</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Ich möchte den Newsletter und Projektmitteilungen erhalten.</Checkbox>
    </div>
    <Button type="submit" class="w-full1" on:click={() => (disclosureModal = true)}>Weiter</Button>
  </form>
</Modal>