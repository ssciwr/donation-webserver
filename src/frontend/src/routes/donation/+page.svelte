<script lang="ts">
  import { Button, Modal, Label, Radio, Input, Checkbox, Blockquote, P } from 'flowbite-svelte'
  import { t } from '$lib/i18n';
  import Map from '$lib/world_map_benhodgson_markedup-svg-worldmap.svelte'
  import { enhance } from '$app/forms';

  let formModal: boolean = $state(false);
  let countryModal: boolean = $state(false);
  let forwardEmailModal: boolean = $state(false);
  let disclosureModal: boolean = $state(false);

  let gender: number = $state(0);
  let age: number = $state(0);
  let lang: number = $state(0);
  let email: string = $state('');
  let cc: string = $state('');
  let accept_disclosure: boolean = $state(false);

  let check_disclosure = () => {
    if (accept_disclosure) {
      forwardEmailModal = true; // Open the next modal
      disclosureModal = false; // Close the current modal
    } else {
      alert($t.donation.modals.alerts.confirmRequired);
    }
  };

  let reject_disclosure = () => {
      alert($t.donation.modals.alerts.rejected);
      forwardEmailModal = false; // Open the next modal
      disclosureModal = false; // Close the current modal
      accept_disclosure = false;
  };
</script>

<main class='p-8 mb-auto'>
<div class="flex justify-center flex-col p-8 mb-auto rounded-lg" style="background-color: rgba(254, 242, 242, 0.6);">
<h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.donation.title}</h1>
<br>
<div class="flex justify-center">
<Button class="px-4 py-2 w-auto bg-primary-900" onclick={() => (formModal = true)}>{$t.donation.buttonText}</Button>
</div>
</div>
</main>

<Modal bind:open={formModal} size="md" autoclose={false} class="w-full" title={$t.donation.modals.formModal.title}>
  <div class="flex flex-col space-y-6">
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">{$t.donation.modals.formModal.gender}</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value={1}>{$t.donation.modals.formModal.genderOptions.m}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value={2}>{$t.donation.modals.formModal.genderOptions.f}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value={3}>{$t.donation.modals.formModal.genderOptions.d}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="gender" class="p-3" bind:group={gender} value={0}>{$t.donation.modals.formModal.genderOptions.noAnswer}</Radio>
          </li>
        </ul>
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">{$t.donation.modals.formModal.age}</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={1}>{$t.donation.modals.formModal.ageOptions.under20}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={2}>{$t.donation.modals.formModal.ageOptions['21-30']}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={3}>{$t.donation.modals.formModal.ageOptions['31-40']}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={4}>{$t.donation.modals.formModal.ageOptions['41-50']}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={5}>{$t.donation.modals.formModal.ageOptions['51-60']}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={6}>{$t.donation.modals.formModal.ageOptions.over60}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="age" class="p-3" bind:group={age} value={0}>{$t.donation.modals.formModal.ageOptions.noAnswer}</Radio>
          </li>
        </ul>
        <p class="mb-4 font-semibold text-gray-900 dark:text-white">{$t.donation.modals.formModal.nativeLanguage}</p>
        <ul class="flex flex-row space-x-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
          <li class="flex items-center">
            <Radio name="lang" class="p-3" bind:group={lang} value={1}>{$t.donation.modals.formModal.nativeLanguageOptions.yes}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="lang" class="p-3" bind:group={lang} value={2}>{$t.donation.modals.formModal.nativeLanguageOptions.no}</Radio>
          </li>
          <li class="flex items-center">
            <Radio name="lang" class="p-3" bind:group={lang} value={0}>{$t.donation.modals.formModal.nativeLanguageOptions.noAnswer}</Radio>
          </li>
        </ul>
        <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
          <Button onclick={() => {countryModal = true; formModal = false;}}>{$t.donation.modals.formModal.buttons.next}</Button>
          <Button color="alternative" onclick={() => (formModal = false)}>{$t.donation.modals.formModal.buttons.cancel}</Button>
        </div>
  </div>
</Modal>

<Modal bind:open={countryModal} size="md" autoclose={false} class="w-full" title={$t.donation.modals.countryModal.title}>
  <div class="flex flex-col space-y-6">
    <Label class="space-y-2">
      <span>{$t.donation.modals.countryModal.label}</span>
    </Label>
    <Map bind:cc/> 
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      {$t.donation.modals.countryModal.selectedCountry} {cc}</h3>
    <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
      <Button onclick={() => {forwardEmailModal = true; countryModal = false;}} >{$t.donation.modals.countryModal.buttons.next}</Button>
      <Button color="alternative" onclick={() => (formModal = true, countryModal = false)}>{$t.donation.modals.countryModal.buttons.back}</Button>
    </div>
  </div>
</Modal>

<Modal bind:open={forwardEmailModal} size="md" autoclose={false} class="w-full" title={$t.donation.modals.forwardEmailModal.title}>
  <form action="?/donate" method="POST" use:enhance class="flex flex-col space-y-6">
    <input type="hidden" name="gender" value={gender} />
    <input type="hidden" name="age" value={age} />
    <input type="hidden" name="lang" value={lang} />
    <input type="hidden" name="country" value={cc} />
    
    <Label class="space-y-2">
      <span>{$t.donation.modals.forwardEmailModal.emailLabel}</span>
      <Input type="email" name="email" bind:value={email} placeholder="name@company.com" required />
    </Label>
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      {$t.donation.modals.forwardEmailModal.revocationText}
    </h3>
    {#if accept_disclosure}
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      {$t.donation.modals.forwardEmailModal.forwardingText} <br>
      <Blockquote bg class="bg-gray-200 my-4 p-4 rounded" italic={false}>
        <P size="lg" height="relaxed">{$t.donation.modals.forwardEmailModal.donationEmail}</P>
      </Blockquote>
      </h3>
      <Button type="submit">{$t.donation.modals.forwardEmailModal.buttons.submit}</Button>
    {:else}
      <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
        <Button type="button" onclick={() => (disclosureModal = true)}>{$t.donation.modals.forwardEmailModal.buttons.next}</Button>
        <Button type="button" color="alternative" onclick={() => (countryModal = true, forwardEmailModal = false)}>{$t.donation.modals.forwardEmailModal.buttons.back}</Button>
      </div>
    {/if}
  </form>
</Modal>

<Modal bind:open={disclosureModal} size="md" autoclose={false} class="w-full" title={$t.donation.modals.disclosureModal.title}>
  <h1 class="text-base leading-relaxed text-black">{$t.donation.modals.disclosureModal.header}</h1>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.informationTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.informationText}
    </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.whatIsItTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.whatIsItText}
    </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.procedureTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.procedureText}
    </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.costsTitle}</h3>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.costsText}
     </p>
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.withdrawalTitle}</h3>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.withdrawalText}
    </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.revocationTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.revocationText}
    </p>
    <h2 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.dataProtectionHeader}</h2>
      
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.dataCollectionTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.dataCollectionIntro}
    </p> 
      <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
        <li>{$t.donation.modals.disclosureModal.dataCollectionItems.emails}
        </li>
        <li>{$t.donation.modals.disclosureModal.dataCollectionItems.questionnaire}
        </li>
      </ul>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.dataCollectionNote}
    </p> 
      
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.dataProcessingTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.dataProcessingText}
    </p>
      
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.dataAccessTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.dataAccessText}
    </p>
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.rightsTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.rightsIntro}</p> 
      <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
        <li><b>{$t.donation.modals.disclosureModal.rightsItems.information}</b>
        </li>
      
        <li><b>{$t.donation.modals.disclosureModal.rightsItems.correction}</b>
        </li>
      
        <li><b>{$t.donation.modals.disclosureModal.rightsItems.deletion}</b>
        </li>
      
        <li><b>{$t.donation.modals.disclosureModal.rightsItems.restriction}</b>
        </li>
      
        <li><b>{$t.donation.modals.disclosureModal.rightsItems.objection}</b>
        </li>

        <li>{$t.donation.modals.disclosureModal.rightsItems.complaint}
        </li>

        <li>{$t.donation.modals.disclosureModal.rightsItems.revocation}
        </li>
      
      </ul>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.rightsContact}
    </p>
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">
      {$t.donation.modals.disclosureModal.responsibilityTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.responsibilityText}
    </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">{$t.donation.modals.disclosureModal.dataProtectionTitle}</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {$t.donation.modals.disclosureModal.dataProtectionText}
    </p>
      <form class="flex flex-col space-y-6">
      <div class="flex items-start">
        <Checkbox required bind:checked={accept_disclosure}>
          {$t.donation.modals.disclosureModal.checkboxText}</Checkbox>
      </div>
      </form>
      <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
        <Button onclick={() => check_disclosure()}>{$t.donation.modals.disclosureModal.buttons.accept}</Button>
        <Button color="alternative" onclick={() => reject_disclosure()}>{$t.donation.modals.disclosureModal.buttons.reject}</Button>
      </div>
</Modal>
