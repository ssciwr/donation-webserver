<script lang="ts">
 import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<main class='p-8 h-auto'>
  <h1 class="mb-4 text-4xl font-extrabold center leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
    FAQ
</h1>
<p class="mb-4 text-gray-100 dark:text-gray-400">
  Hier finden Sie Antworten auf häufig gestellte Fragen zum Projekt. Die ausgeklappten AccordionItems sollten wahrscheinlich mit einer anderen Farbe hinterlegt werden.
</main>

<Accordion 
inactiveClass="text-gray-100 dark:text-gray-400 hover:bg-red-400 dark:hover:bg-gray-800">
   <AccordionItem >
      <span slot="header">
        Was habe ich davon, wenn ich meine E-Mails spende? (Gibt es ein Gewinnspiel?)
    </span>
      <p class="mb-2 text-gray-100 dark:text-gray-400">
        Mit dem Spenden der E-Mails leisten Sie einen immensen Beitrag zur linguistischen Forschung! Ohne die E-Mailspenden hätte die Forschung keine Datenbasis, um sich ein realistisches Bild zum tatsächlichen Schreiben zu machen. Daher vielen Dank für Ihre Unterstützung!
      </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
    Wer kann Emails spenden?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Alle Personen über 18 Jahre können ihre E-Mails spenden.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
    Welche Art von Emails kann ich spenden? (informell, formell etc.)
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Mehr ist mehr: Sie können alles* spenden, was Sie möchten! *Bitte spenden Sie ausschließlich E-Mails, die Sie selbst gesendet haben oder bei denen Sie die Zustimmung aller Beteiligten eingeholt haben. Die E-Mails können gerne zu den unterschiedlichsten Anlässen geschrieben worden sein.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
    Wie lange dauert die E-Mailspende ungefähr?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Die Dauer hängt von der Anzahl der gespendeten E-Mails ab.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
    Wie kann ich E-Mails spenden?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Klicken Sie <a href="/about" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">hier</a>, um nähere Informationen zum Ablauf der Spende zu erhalten. (Link zu: Information oder Spende?)
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
    Was ist das Ziel des Forschungsprojektes?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Ein kleiner Schritt für Sie, ein Großer für die Wissenschaft!
    Nachdem sich die E-Mailkommunikation als eine übliche Form der Kommunikation in den zurückliegenden Jahrzehnten etabliert hat, interessiert uns, wie sich der Sprachgebrauch in den E-Mails charakterisieren lässt und inwiefern sich diese Form der Kommunikation von anderen Arten der schriftlichen Kommunikation wie der Briefkommunikation unterscheidet oder dieser eventuell auch ähnelt.
</AccordionItem>
<AccordionItem >
    <span slot="header">
    Wer arbeitet im Forschungsprojekt zu den E-Mails?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Das Projekt ist ein linguistisches Projekt an der Universität Heidelberg. Nur von der Projektleitung autorisierte Personen dürfen am Forschungsprojekt teilnehmen. Für mehr Informationen zum Team, klicken Sie <a href="/about" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">hier</a>.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
        Wie wird mit den Daten gearbeitet?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
    Die E-Mails werden von uns ausschließlich in anonymisierter Form gespeichert und danach analysiert. In der Analyse haben wir keinen Zugriff auf Daten, d.h. auf E-Mails, die nicht anonymisiert sind. Die Daten werden ausschließlich für wissenschaftliche Zwecke genutzt.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
        Wie werden die E-Mails anonymisiert?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Die E-Mails werden automatisch anonymisiert. Dazu nutzen wir ein entsprechendes Tool, welches wir im vergangenen Jahr an hunderten Test-E-Mails überprüft haben. Durch die Anonymisierung werden alle persönlichen Daten wie Namen, Telefonnummer oder Adressen aus dem E-Mails herausgestrichen und durch Platzhalter wie Name für Sabine Mustermann ersetzt.
        Im Anschluss werden die automatisch anonymisierten E-Mails noch einmal von geschulten studentischen Hilfskräften des Projektes durchsucht und so sicher gestellt, dass nur vollständig anonymisierte E-Mails von uns in die Analysen einbezogen werden.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
        Wo werden meine E-Mails gespeichert?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Die anonymisierten E-Mails werden auf einem passwortgeschützten Server der Universität Heidelberg gespeichert.
    </p>
</AccordionItem>
<AccordionItem >
    <span slot="header">
        Wer kann meine E-Mails einsehen?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Die von Ihnen hochgeladenen E-Mails sind vor unbefugtem Zugriff geschützt. Eine automatisierte Anonymisierung stellt sicher, dass keine persönlichen Daten identifizierbar bleiben.
        Nach der Anonymisierung werden die E-Mails in einer Datenbank abgelegt, die für Forschungszwecke genutzt wird. Dort werden die E-Mails anhand spezifischer Suchanfragen analysiert, welche sich - je nach der gewählten Forschungsfrage - unterscheiden können.
    Der Zugang zu den anonymisierten E-Mails ist streng limitiert. Nur von der Projektleitung autorisierte Personen dürfen die E-Mails auswerten. Dazu gehören:
    </p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-100">
      <li>Postdoktorand*innen,</li>
      <li>Doktorand*innen,</li>
      <li>ausgewählte studentische Hilfskräfte, die im Projekt mitarbeiten.</li>
    </ul>
    <p class="mb-2 text-gray-100 dark:text-gray-400">So wird sichergestellt, dass Ihre Daten ausschließlich im Rahmen des Forschungsprojekts und durch qualifizierte Fachkräfte verarbeitet werden.
    </p>
</AccordionItem><AccordionItem >
    <span slot="header">
        Wie / Wo werden die Daten gegebenenfalls veröffentlicht?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Die E-Mails werden von uns wissenschaftlich ausgewertet. Die daraus entstehenden Forschungsergebnisse werden in Fachpublikationen veröffentlicht. In diesen werden Einzelbeispiele aus dem E-Mail-Korpus zur Illustration wissenschaftlicher Aussagen in anonymisierter Form veröffentlicht. 
        Falls Sie mehr über unsere Forschungsergebnisse wissen möchten, können Sie sich <a href="/about" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">hier</a> zu unserem Newsletter anmelden.
    </p>
</AccordionItem><AccordionItem >
    <span slot="header">
        Wie kann ich meine Emails spenden?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Füllen Sie die Datenmaske zu den Metadaten aus und leiten Sie die Emails an die angegebene Funktionsadresse weiter.
    </p>
</AccordionItem><AccordionItem >
    <span slot="header">
        Was muss ich beim Weiterleiten meiner Emails beachten?
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400">
        Bitte achten Sie darauf, dass die angegebene Email Adresse in der Datenmaske zu den Metadaten der gleichen Email Adresse entspricht, von der Sie weiterleiten. Falls Sie mehrere Email Adressen haben, achten Sie bitte darauf, dass Sie die richtige Email Adresse angeben bzw. eine erneute Metadatenmaske ausfüllen pro Spender-Emailadresse.
    </p>
</AccordionItem><AccordionItem >
    <span slot="header">
        Mehr ...
  </span>
    <p class="mb-2 text-gray-100 dark:text-gray-400"> ...
    </p>
</AccordionItem>
</Accordion>
