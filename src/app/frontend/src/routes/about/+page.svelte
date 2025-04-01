<script lang="ts">
    import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte'
    import { goto } from '$app/navigation';
    let emailModal: boolean = $state(false);
    let subscribe: boolean = $state(false);
    let email: string = $state('');
  
    function gotoDonate() {
      goto('/donation');
    };

    let check_signup = () => {
        if (!subscribe) {
            alert('Bitte bestaetigen Sie die Einwilligung zum Newsletter um fortzufahren.');
            emailModal = true; 
        }
    };

  </script>

<main class='p-8 h-auto'>

    <h1 class="mb-4 text-4xl font-extrabold center leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Projektbeschreibung</h1>
    <p class="text-gray-100"> Auch wenn die E-Mail nun schon seit Jahrzehnten als persönliches oder auch als professionelles Kommunikationsmittel benutzt wird, 
        gibt es nur relativ wenige linguistische Arbeiten, die ihren Sprachgebrauch genauer analysieren. Ein wesentlicher Grund für die 
        überschaubare Anzahl an umfassenden linguistischen Studien, liegt in der mangelnden Datenbasis. Um E-Mails analysieren zu können, 
        benötigen wir E-Mails als Korpora. Anders als bei Briefen, von denen ein Teil bis heute in sehr verschiedenen kleinen oder großen 
        Archiven aufbewahrt und dort zur Analyse genutzt werden können, haben wir für E-Mails keine Datenbanken, die uns ausreichend E-Mails 
        zur Analyse zur Verfügung stellen könnten.  Wir sind demzufolge auf E-Mail-Spenden angewiesen.  
        </p>
    <p class="text-gray-100">Mit den gespendeten E-Mails, die selbstverständlich von uns komplett anonymisiert werden, hätten wir die Möglichkeit, 
        verschiedene linguistische Fragestellungen zu bearbeiten oder auch die Frage zu beantworten, ob und warum wir E-Mails anders 
        schreiben als Briefe.
    </p>

    <h3 class="text-gray-100">
        Umgang mit den Daten/Anonymisierung
    </h3>
    <p class="text-gray-100"> Hinweise an die Spendenden: Bitte spenden Sie ausschließlich E-Mails, die Sie selbst gesendet haben oder bei denen 
        Sie die Zustimmung aller Beteiligten eingeholt haben.  </p>
    <p class="text-gray-100">Anonymisierung der Mails: Die E-Mails werden automatisch anonymisiert. Dazu nutzen wir ein entsprechendes Tool, 
        welches wir im vergangenen Jahr an hunderten Test-E-Mails überprüft haben. Durch die Anonymisierung werden alle persönlichen Daten wie Namen, 
        Telefonnummer oder Adressen aus dem E-Mails herausgestrichen und durch Platzhalter wie Name für Sabine Mustermann ersetzt. 
        </p>
    <p class="text-gray-100"> Anzahl und Art der E-Mails: Es gibt keine Begrenzung. Sie können grundsätzlich so viele E-Mails spenden wie Sie möchten. 
        Die E-Mails können gerne zu den unterschiedlichsten Anlässen und in unterschiedlichsten Situationen geschrieben worden sein. 
        </p> 
    <Button class="w-fit" on:click={gotoDonate}>
        Emails spenden
    </Button>
    <Button on:click={() => (emailModal = true)}>Projektneuigkeiten erhalten</Button>
</main>

<Modal bind:open={emailModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#" method="POST">
      <Label class="space-y-2">
          <span>Falls Sie unseren Newsletter und Projektneuigkeiten erhalten möchten, 
            geben Sie bitte Ihre Email Adresse an:</span>
        <Input type="email" name="email" bind:value={email} placeholder="name@company.com" required />
      </Label>
      <div class="flex items-start">
        <Checkbox bind:checked={subscribe}>Ich möchte den Newsletter und Projektmitteilungen erhalten.</Checkbox>
      </div>
      <Button type="submit" class="w-full1" on:click={() => check_signup()}>Projektmitteilungen erhalten</Button>
      <Button class="w-full1">Keine Benachrichtigungen erhalten</Button>
    </form>
  </Modal>