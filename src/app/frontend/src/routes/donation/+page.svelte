<script lang="ts">
  import { Button, Modal, Label, Input, Checkbox, Img} from 'flowbite-svelte'
  import Map from '$lib/Map2.svelte'
  let testModal: boolean = $state(false);
  let formModal: boolean = $state(false);
  let countryModal: boolean = $state(false);
  let forwardEmailModal: boolean = $state(false);
  let emailModal: boolean = $state(false);
  let disclosureModal: boolean = $state(false);
	const { data } = $props();
	const ids = data.users;
</script>

<form method="POST">
	<input required type="int" name="id" />
	<button>Add id</button>
</form>

{#each ids as id}
	<div>
		<h1>ID: {id.id}</h1>
	</div>
{/each}



<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

<!-- <Button on:click={() => (formModal = true)}>Datenspende</Button> -->
<Button on:click={() => (testModal = true)}>Datenspende</Button>

<Modal bind:open={testModal} size="xs" autoclose={false} class="w-full">
  <form method="POST">
    <input required type="int" name="id" />
    <button>Add id</button>
  </form>
</Modal>


<Modal bind:open={formModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#" method="POST">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Collect metadata</h3>
    <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your id</label>
    <input required type="int" name="id" />
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
    </Label>
    <Map />
    <Button type="submit" class="w-full1" on:click={() => (forwardEmailModal = true)}>Weiter</Button>
  </form>
</Modal>

<Modal bind:open={forwardEmailModal} size="xs" autoclose={true} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Um Ihre Emails zu spenden,
    leiten Sie diese bitte an folgende Adresse weiter: <br>
    mailcom-donation@rose.uni-heidelberg.de
  </h3>
    <Label class="space-y-2">
        <span>Ihre Email Adresse von der Sie spenden:</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Falls Sie Ihre Spende zu 
      einem späteren Zeitpunkt widerrufen möchten,
      nutzen Sie bitte die ID, die Sie in der Bestätigungsemail erhalten haben.
    </h3>
    <Button type="submit" class="w-full1" on:click={() => (emailModal = true)}>Weiter</Button>
  </form>
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
        <Checkbox required>
          Ich habe die Informationen zum Datenschutz gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu. </Checkbox>
          <!-- Ich habe die <a href="/about" class="text-blue-600 dark:text-blue-500 hover:underline">Informationen zum Datenschutz</a> gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu. </Checkbox> -->
      </div>
      </form>
    <svelte:fragment slot="footer">
      <Button on:click={() => alert('Datenspende erfolgreich')}>Ich akzeptiere und reiche meine Daten ein</Button>
      <Button color="alternative">Ablehnen</Button>
    </svelte:fragment>
</Modal>