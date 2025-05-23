<script lang="ts">
 import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<main class='p-8 h-auto'>
  <h1 >
    FAQ
</h1>
<p class="mb-4">
  Hier finden Sie Antworten auf häufig gestellte Fragen zum Projekt. Die ausgeklappten AccordionItems sollten wahrscheinlich mit einer anderen Farbe hinterlegt werden.
</main>

<Accordion 
inactiveClass="text-gray-100 dark:text-gray-400 hover:bg-red-400 dark:hover:bg-gray-800"
multiple=True>
   <AccordionItem open>
      <span slot="header">
        Was habe ich davon, wenn ich meine E-Mails spende?
    </span>
      <p class="mb-2 text-gray-100 dark:text-gray-400">
        Mit dem Spenden der E-Mails leisten Sie einen immensen Beitrag zur linguistischen 
        Forschung! Ohne die E-Mailspenden hätte die Forschung keine Datenbasis, um sich ein 
        realistisches Bild zum tatsächlichen Schreiben zu machen. Daher vielen Dank für Ihre 
        Unterstützung!
      </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
    Wer kann Emails spenden?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Alle Personen über 18 Jahre können ihre E-Mails spenden.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
    Welche Art von Emails kann ich spenden? (informell, formell etc.)
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Mehr ist mehr: Sie können alles spenden, was Sie möchten! 
    Bitte spenden Sie ausschließlich E-Mails, die Sie selbst gesendet haben oder bei denen 
    Sie die Zustimmung aller Beteiligten eingeholt haben. Die E-Mails können gerne zu den 
    unterschiedlichsten Anlässen geschrieben worden sein.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
    Wie lange dauert die E-Mailspende ungefähr?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Die Dauer hängt von der Anzahl der gespendeten E-Mails ab.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
    Wie kann ich E-Mails spenden?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Klicken Sie <a href="/donation" target="_blank" rel="noreferrer" 
    class="text-blue-600 dark:text-blue-500 hover:underline">hier</a>, um nähere 
    Informationen zum Ablauf der Spende zu erhalten.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
    Was ist das Ziel des Forschungsprojektes?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Ein kleiner Schritt für Sie, ein Großer für die Wissenschaft!
    Nachdem sich die E-Mailkommunikation als eine übliche Form der Kommunikation 
    in den zurückliegenden Jahrzehnten etabliert hat, interessiert uns, wie sich der 
    Sprachgebrauch in den E-Mails charakterisieren lässt und inwiefern sich diese Form 
    der Kommunikation von anderen Arten der schriftlichen Kommunikation wie der 
    Briefkommunikation unterscheidet oder dieser eventuell auch ähnelt.
</AccordionItem>
<AccordionItem open>
    <span slot="header">
    Wer arbeitet im Forschungsprojekt zu den E-Mails?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Das Projekt ist ein linguistisches Projekt an der Universität Heidelberg. 
    Nur von der Projektleitung autorisierte Personen dürfen am Forschungsprojekt 
    teilnehmen. Für mehr Informationen zum Team, klicken Sie <a href="/about" 
    target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">hier</a>.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Wie wird mit den Daten gearbeitet?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Die E-Mails werden von uns ausschließlich in pseudonymisierter Form gespeichert und danach 
    analysiert. In der Analyse haben wir keinen Zugriff auf Daten, d.h. auf E-Mails, die nicht 
    pseudonymisiert sind. Die Daten werden ausschließlich für wissenschaftliche Zwecke genutzt.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Wie werden die E-Mails pseudonymisiert?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
      Die E-Mails werden zunächst automatisch pseudonymisiert. Dazu nutzen wir ein 
      entsprechendes <a href="https://github.com/ssciwr/mailcom" target="_blank" 
      rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Tool 
      (mailcom)</a>, welches wir im vergangenen Jahr an hunderten Test-E-Mails überprüft haben. 
      Durch die Pseudonymisierung werden alle persönlichen Daten wie Namen, Telefonnummer oder 
      Adressen aus deN E-Mails herausgestrichen und durch Platzhalter wie Name für 
      Sabine Mustermann ersetzt. 

      Im Anschluss werden die pseudonymisierten E-Mails noch einmal von geschulten 
      studentischen Hilfskräften des Projektes durchsucht und gegebenenfalls komplett 
      pseudonymisiert, so dass nur vollständig pseudonymisierte E-Mails von uns in die 
      Analysen einbezogen werden. 
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Wo werden meine E-Mails gespeichert?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
      Die pseudonymisierten E-Mails werden auf einem passwortgeschützten Server der 
      Universität Heidelberg zwischengespeichert. Eine längerfristige Speicherung 
      erfolgt nur von diesen vollständig pseudonymisierten E-Mails.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Wer kann meine E-Mails einsehen?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
      Die von Ihnen gespendeten E-Mails sind vor unbefugtem Zugriff geschützt. 
      Die Pseudonymisierung stellt sicher, dass keine persönlichen Daten identifizierbar 
      bleiben.   

      Nach der Pseudonymisierung werden die E-Mails in einer Datenbank abgelegt, die für 
      Forschungszwecke genutzt wird. 
      Dort werden die E-Mails anhand spezifischer Suchanfragen analysiert, welche sich - 
      je nach der gewählten 
      Forschungsfrage - unterscheiden können.   
      
      Der Zugang zu den pseudonymisierten E-Mails ist streng limitiert. 
      Nur von der Projektleitung autorisierte Personen dürfen auf die E-Mails zugreifen. 
      Dazu gehören:   
    </p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-100">
      <li>Postdoktorand*innen,</li>
      <li>Doktorand*innen,</li>
      <li>ausgewählte studentische Hilfskräfte, die im Projekt mitarbeiten.</li>
    </ul>
    <p class="mb-2 text-gray-100 dark:text-gray-400">So wird sichergestellt, dass 
      Ihre Daten ausschließlich im Rahmen des Forschungsprojekts und durch qualifizierte 
      Fachkräfte verarbeitet werden.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Wie / Wo werden die Daten gegebenenfalls veröffentlicht?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Die E-Mails werden von uns wissenschaftlich ausgewertet. Die daraus entstehenden 
        Forschungsergebnisse werden in Fachpublikationen veröffentlicht. In diesen werden 
        in Auszügen Einzelbeispiele aus dem E-Mail-Korpus zur Illustration wissenschaftlicher 
        Aussagen in pseudonymisierter Form veröffentlicht. 
        Falls Sie mehr über unsere Forschungsergebnisse wissen möchten, können Sie 
        sich <a href="/about" target="_blank" rel="noreferrer" 
        class="text-blue-600 dark:text-blue-500 hover:underline">hier</a> 
        zu unserem Newsletter anmelden.
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Wie kann ich meine Emails spenden?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
      Folgen Sie der Anleitung unter "Datenspende". 
      Sie werden in der Datenspende darum gebeten, die Emails die Sie spenden möchten, 
      an eine Spender-Adresse weiterzuleiten. 
      Weiterhin werden einige wenige Metadaten abgefragt, die für die Forschungsarbeiten wichtig sind. 
      Sowohl die Metadaten als auch die gespendeten Emails können nach erfolgter 
      Pseudonymisierung nicht mehr einer Person zugeordnet werden und enthalten keine 
      persönliche Daten. 
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
        Was muss ich beim Spenden meiner Emails beachten?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
      Sie werden in der Datenspende darum gebeten, die Emails die Sie spenden möchten, 
      an eine Spender-Adresse weiterzuleiten.
      Bitte leiten Sie keine zu großen Anhänge weiter (&gt10 MB)
    </p>
</AccordionItem>
<AccordionItem open>
    <span slot="header">
      Welche technischen Voraussetzungen benötige ich, um E-Mails spenden zu können?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400"> 
      Sie müssen lediglich Ihre Emails an die im Spendevorgang angegebene E-Mail 
      Adresse weiterleiten. 
    </p>
</AccordionItem> 
</Accordion>
