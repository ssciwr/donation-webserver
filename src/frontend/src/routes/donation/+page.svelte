<script lang="ts">
  import { Button, Modal, Label, Radio, Input, Checkbox, Blockquote, P } from 'flowbite-svelte'
  import Map from '$lib/world_map_benhodgson_markedup-svg-worldmap.svelte'
  export const prerender = false;

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
      alert('Bitte bestaetigen Sie die Einwilligungserklaerung um fortzufahren.');
    }
  };

  let reject_disclosure = () => {
      alert('Sie haben die Einwilligungserklaerung abgelehnt. Ihre Daten werden nicht gespeichert.');
      forwardEmailModal = false; // Open the next modal
      disclosureModal = false; // Close the current modal
  };
</script>

<div class="flex justify-center items-center flex-col p-8 mb-auto">

    <h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">Hier kannst du deine Emails spenden!</h1>
      
<Button on:click={() => (formModal = true)}>Datenspende</Button>
</div>


<Modal bind:open={formModal} size="md" autoclose={false} class="w-full" title="Metadaten">
  <form class="flex flex-col space-y-6" action="/donation" 
  onsubmit={() => {
    countryModal = true; // Open the next modal
    formModal = false; // Close the current modal
  }}>
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
        <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
          <Button type="submit" class="w-full1">Weiter</Button>
          <Button class="w-full1" color=alternative on:click={() => (formModal = false)}>Abbrechen</Button>
        </div>
  </form>
</Modal>

<Modal bind:open={countryModal} size="md" autoclose={false} class="w-full" title="Metadaten">
  <form class="flex flex-col space-y-6" action="/donation"
    onsubmit={() => {
    forwardEmailModal = true; // Open the next modal
    countryModal = false; // Close the current modal
    }}>
    <Label class="space-y-2">
      <span>Wo haben Sie die meisten Nachrichten verfasst?</span>
    </Label>
    <Map bind:cc/> 
    <!-- still missing the country selection -->
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Ausgewähltes Land: {cc}</h3>
    <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
      <Button type="submit" class="w-full1" >Weiter</Button>
      <Button class="w-full1" color="alternative" on:click={() => (formModal = true, countryModal = false)}>Zurück</Button>
    </div>
  </form>
</Modal>

<Modal bind:open={forwardEmailModal} size="md" autoclose={false} class="w-full" title="Metadaten">
  <form class="flex flex-col space-y-6" action="/donation" method="POST">
    <Label class="space-y-2">
        <span>Ihre Email Adresse von der Sie spenden:</span>
      <Input type="email" name="email" bind:value={email} placeholder="name@company.com" required />
    </Label>
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Falls Sie Ihre Spende zu 
      einem späteren Zeitpunkt widerrufen möchten,
      nutzen Sie bitte die ID, die Sie in der Bestätigungsemail erhalten haben.
    </h3>
    <input type="hidden" name="gender" value={gender} />
    <input type="hidden" name="age" value={age} />
    <input type="hidden" name="lang" value={lang} />
    <input type="hidden" name="country" value={cc} />
    {#if accept_disclosure}
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Um Ihre Emails zu spenden,
      leiten Sie diese bitte an folgende Adresse weiter: <br>
      <Blockquote bg class="bg-gray-200 my-4 p-4 rounded" italic={false}>
        <P size="lg" height="relaxed">mailcom-donation@rose.uni-heidelberg.de</P>
      </Blockquote>
      
    </h3>
      <Button type="submit" class="w-full1">Einreichen</Button>
    {:else}
      <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
        <Button class="w-full1" on:click={() => (disclosureModal = true)}>Weiter</Button>
        <Button class="w-full1" color="alternative" on:click={() => (countryModal = true, forwardEmailModal = false)}>Zurück</Button>
      </div>
    {/if}
  </form>
</Modal>

<Modal bind:open={disclosureModal} size="md" autoclose={false} class="w-full" title="Einwilligungserklärung">
  <h1 class="text-base leading-relaxed text-black">Information und Einwilligungserklärung zum wissenschaftlichen Forschungsvorhaben 
      "Schreiben nach der Briefkultur: MailCom"</h1>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Information zum wissenschaftlichen Forschungsvorhaben</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Liebe*r Teilnehmer*in des wissenschaftlichen Forschungsvorhabens,       
      wir möchten Sie um Ihre Einwilligung zur Teilnahme an dem wissenschaftlichen 
      Forschungsvorhaben MailCom und der damit verbundenen Verarbeitung Ihrer personenbezogenen 
      Daten bitten. Hierzu erhalten Sie im Folgenden Informationen zum Inhalt und zum Ablauf 
      des wissenschaftlichen Forschungsvorhabens sowie zur beabsichtigten Nutzung Ihrer Daten:  </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Worum geht es in diesem wissenschaftliche Forschungsvorhaben?</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Seit über 50 Jahren wird die E-Mail als persönliches und professionelles Kommunikationsmittel benutzt. 
      Auf der Arbeit, unter Freunden, mit Behörden und in Vereinen werden E-Mails in vielen verschiedenen 
      Situationen geschrieben und empfangen. In zahlreichen Bereichen hat die E-Mail den Brief als 
      Kommunikationsform ersetzt. Ziel des Projektes MailCom, ist zu untersuchen, inwieweit sich der 
      Sprachgebrauch in E-Mails im Unterschied zur über Jahrhunderte üblichen Briefkommunikation 
      verändert hat. Das wissenschaftliche Forschungsvorhaben wird durchgeführt, um Standardisierungsaspekte 
      von Text- bzw. Diskurstypen oder auch einzelnen sprachlichen Strukturen sprachwissenschaftlich zu 
      analysieren. Die Forschungsgruppe wird vom Heidelberg Centre for Digital Humanities der Universität 
      Heidelberg von 2024 bis 2025 gefördert.    </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Wie ist der genaue Ablauf des wissenschaftlichen 
      Forschungsvorhabens und wie sollen meine Daten verwendet werden?</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Ihre Teilnahme an diesem wissenschaftlichen Forschungsvorhaben wird die Zeit der E-Mail Spende 
      und die Beantwortung eines ca. 2-minütigen Fragebogens umfassen.  
      
      Während dieses wissenschaftlichen Forschungsvorhabens werden Sie die Möglichkeit haben, eine von 
      Ihnen ausgewählte Anzahl an E-Mails bzw. E-Mail-Verläufen zu spenden. In einem ersten Schritt werden 
      Sie gebeten einen sehr kurzen Fragebogen zu Ihrer Situation als Schreiber auszufüllen. Die im 
      Fragebogen erhobenen Informationen werden nicht auf Ihre Person zurückzuführen sein, sondern 
      ausschließlich zusammen mit den bereits pseudonymisierten E-Mails gespeichert und für die 
      sprachwissenschaftliche Analyse genutzt. Der zweite Schritt ist die Datenspende. Dabei leiten Sie 
      die von Ihnen zur Spende ausgewählten E-Mails an eine Universitäts-E-Mail-Adresse der Universität
      Heidelberg weiter. Die von Ihnen gespendeten E-Mails werden bei Eintreffen auf unseren Universitätsservern 
      umgehend und automatisiert pseudonymisiert. Alle persönlichen Daten in den E-Mails (Namen, Adressen, 
      Telefonnummern, Ortsbezeichnungen, Vereins- und Organisationsnamen) werden vor der Speicherung 
      verändert, abstrahiert oder entfernt, wodurch sie als persönliche Informationen nicht mehr erkennbar 
      sind. In einem dritten Schritt bekommen Sie von uns einen Pin-Code zugeschickt, der Ihrer Spende 
      zugeordnet ist. Bewahren Sie diesen Code unbedingt auf. Im Falle einer von Ihnen gewünschten Löschung 
      Ihrer Daten für das Forschungsvorhaben, ermöglicht uns einzig dieser Code auf die von Ihnen gespendeten 
      und von uns automatisch pseudonymisierten Mails zuzugreifen.   </p>
    <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Entstehen für mich Kosten durch die Teilnahme 
      an dem wissenschaftlichen Forschungsvorhaben und wird eine Aufwandsentschädigung bezahlt?</h3>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Durch die Teilnahme an diesem wissenschaftlichen Forschungsvorhaben entstehen für Sie keine zusätzlichen Kosten.  
      Eine Aufwandsentschädigung für Ihre Teilnahme an dem wissenschaftlichen Forschungsvorhaben wird nicht gezahlt. 
      Ansprüche auf andere Formen der Vergütung, Tantiemen oder sonstige Beteiligungen an finanziellen Vorteilen und Gewinnen, 
      die möglicherweise auf der Basis der Forschungsergebnisse erzielt werden, sind ausgeschlossen. </p>
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Wer entscheidet, ob ich aus dem wissenschaftlichen 
        Forschungsvorhaben gegebenenfalls vorzeitig ausscheide?</h3>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Die Teilnahme an diesem wissenschaftlichen Forschungsvorhaben ist freiwillig. Sie können jederzeit ohne 
      Angabe von Gründen die Löschung Ihrer gespendeten E-Mails verlangen, ohne dass Ihnen dadurch Nachteile 
      entstehen. Um die Löschung zu vollziehen, senden Sie uns den Pin-Code, den Sie am Ende Ihrer Spende 
      erhalten haben in einer formlosen E-Mail an mailcom@rose.uni-heidelberg.de.   
    </p>
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Datenschutzrechtliche Information: 
      Was passiert mit meinen Daten?</h3>
      
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Welche Daten werden in dem 
      wissenschaftlichen Forschungsvorhaben erhoben?</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      
      Im Rahmen des wissenschaftlichen Forschungsvorhabens werden die folgenden Daten von Ihnen erhoben: 
      Projektdaten, d.h. die im Rahmen des wissenschaftlichen Forschungsvorhabens produzierten Informationen 
      zu Ihrer Person, wie insbesondere:  </p> 
      <ul class="list-disc ps-5 dark:text-gray-400 text-gray-400">
        <li>Die von Ihnen durch das Weiterleiten an die Spende-Adresse gespendeten E-Mails  
        <li>Fragebogendaten zu Ihrer Person (Alter, Geschlecht, sprach-geographische Daten) 
      </ul>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Die Projektdaten können auch besondere Kategorien personenbezogener Daten beinhalten wie beispielsweise 
      personenbezogene Daten aus denen politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder 
      die Gewerkschaftszugehörigkeit hervorgehen, Daten zum Sexualleben oder der sexuellen Orientierung.</p> 
      
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Auf welche Art und Weise erfolgt die 
        Datenverarbeitung in dem wissenschaftlichen Forschungsvorhaben?</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      
      Die produzierten Projektdaten, d.h. die E-Mails bzw. E-Mail-Verläufe und die Antworten auf den kurzen 
      Fragebogen werden automatisch pseudonymisiert. Alle Angaben, die zu einer Identifizierung Ihrer Person 
      führen könnten (z.B. Name, E-Mail-Adresse, Ortsbezeichnungen, Telefonnummern, Vereins- und Organisationsnamen) 
      und sonstige Hinweise werden verändert, abstrahiert oder entfernt. Die Auswertung der Daten durch 
      Projektmitarbeiter erfolgt nach der Anonymisierung der Daten. In einzelnen Fällen können weitere Textpassagen 
      von Mitarbeitern gelöscht oder teilweise verfremdet werden, um die Anonymität der Schreiber in allen Aspekten 
      zu gewährleisten.  
      
      In wissenschaftlichen Veröffentlichungen, wie in Publikationen oder auf Tagungen und Konferenzen, werden 
      keine personenbezogenen Daten von Ihnen genannt, d.h. die Forschungsergebnisse werden ohne Bezug zu Ihrer 
      Person veröffentlicht. Die pseudonymisierten E-Mails werden nur in Ausschnitten zitiert, um gegenüber Dritten 
      sicherzustellen, dass der entstehende Gesamtzusammenhang von Ereignissen nicht zu einer Identifizierung 
      Ihrer Person führen kann. </p>
      
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Wer erhält Kenntnis von den Daten und 
        welche Personen und Institutionen haben Zugang zu den Daten?</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      
      Zugang zu Ihren gespendeten Emails und Daten haben nur Mitarbeiter*innen des wissenschaftlichen 
      Forschungsvorhabens. Diese Personen sind auf Beachtung der datenschutzrechtlichen Anforderungen verpflichtet. 
      Die Daten sind vor fremden Zugriffen geschützt. 
    </p>
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">Welche Rechte stehen den von der 
        Datenverarbeitung Betroffenen zu?</h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      
      Die Teilnahme an dem wissenschaftlichen Forschungsvorhaben ist freiwillig; sollten Sie nicht teilnehmen, 
      entstehen Ihnen keine Nachteile. Sie haben jederzeit die Möglichkeit die folgenden Rechte geltend zu machen:</p> 
      <ul class="list-disc ps-5 dark:text-gray-400 text-gray-400">
        <li>Recht auf Auskunft über die von Ihnen verarbeiteten personenbezogenen Daten (Art. 15 DSGVO), 
      
        <li>Recht auf Berichtigung Sie betreffender unrichtiger personenbezogener Daten (Art. 16 DSGVO), 
      
        <li>Recht auf Löschung Sie betreffender personenbezogener Daten (Art. 17 DSGVO), 
      
        <li>Recht auf Einschränkung der Verarbeitung Sie betreffender personenbezogener Daten (Art. 18 DSGVO), 
      
        <li>Recht auf Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten (Art. 21 DSGVO), 
      </ul>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
      personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO), 
      
      Sofern Sie in die Verarbeitung Ihrer Daten eingewilligt haben, besteht die Möglichkeit diese jederzeit 
      für die Zukunft zu widerrufen (Art. 7 Absatz 3 DSGVO). In diesem Fall müssen alle personenbezogenen Daten 
      entweder gelöscht oder pseudonymisiert werden. 
      
      Ihre Rechte sind grundsätzlich schriftlich bei dem zur Datenverarbeitung Verantwortlichen geltend zu machen. 
      <h3 class="text-base leading-relaxed text-black dark:text-gray-400">
      Wer ist für das wissenschaftliche Forschungsvorhaben und der damit verbundenen Datenverarbeitung verantwortlich? 
      An wen kann ich mich bei weiteren Fragen wenden? </h3>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Das wissenschaftliche Forschungsvorhaben wird vom Romanischen Seminar der Universität Heidelberg, Seminarstr. 3, 
      69117 Heidelberg, durchgeführt. Für die Datenverarbeitung verantwortlich ist Prof. Dr. Sybille Große, 
      Leiterin des Projekts MailCom, Universität Heidelberg. 
      
      Für datenschutzrechtliche Fragen wenden Sie sich bitte an die*den Datenschutzbeauftragte*n, Seminarstraße 2, 
      69117 Heidelberg, datenschutz@uni-heidelberg.de.  
      
      Sollten Sie weitere Fragen bezüglich des wissenschaftlichen Forschungsvorhabens haben, wenden Sie sich 
      bitte an die Leiterin des Projektes MailCom, Prof. Dr. Sybille Große, Universität Heidelberg, 
      mailcom@rose.uni-heidelberg.de.
    </p>
      
      <form class="flex flex-col space-y-6" action="/donation">
      <div class="flex items-start">
        <Checkbox required bind:checked={accept_disclosure}>
          Ich habe die Informationen zum Datenschutz gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu. </Checkbox>
          <!-- Ich habe die <a href="/about" class="text-blue-600 dark:text-blue-500 hover:underline">Informationen zum Datenschutz</a> gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu. </Checkbox> -->
      </div>
      </form>
    <svelte:fragment slot="footer">
      <div class="inline-grid grid-cols-2 grid-rows-1 gap-4">
      <Button on:click={() => check_disclosure()}>Ich akzeptiere und reiche meine Daten ein</Button>
      <Button color="alternative" on:click={() => reject_disclosure()}>Ablehnen</Button>
      </div>
    </svelte:fragment>
</Modal>
