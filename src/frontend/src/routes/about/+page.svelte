<script lang="ts">
    import { Button } from 'flowbite-svelte'
    import { goto } from '$app/navigation';
  
    function gotoDonate() {
      goto('/donation');
    };

  </script>

<main class='p-8 mb-auto'>
<div class="flex justify-center flex-col p-8 mb-auto">

    <h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">Projektbeschreibung</h1>
    <p> Auch wenn die E-Mail nun schon seit Jahrzehnten als persönliches oder auch als professionelles Kommunikationsmittel benutzt wird, 
        gibt es nur relativ wenige linguistische Arbeiten, die ihren Sprachgebrauch genauer analysieren. Ein wesentlicher Grund für die 
        überschaubare Anzahl an umfassenden linguistischen Studien, liegt in der mangelnden Datenbasis. Um E-Mails analysieren zu können, 
        benötigen wir E-Mails als Korpora. Anders als bei Briefen, von denen ein Teil bis heute in sehr verschiedenen kleinen oder großen 
        Archiven aufbewahrt und dort zur Analyse genutzt werden können, haben wir für E-Mails keine Datenbanken, die uns ausreichend E-Mails 
        zur Analyse zur Verfügung stellen könnten.  Wir sind demzufolge auf E-Mail-Spenden angewiesen.
        </p>
        <br>
    <p>Mit den gespendeten E-Mails, die selbstverständlich von uns komplett pseudonymisiert werden, hätten wir die Möglichkeit, 
        verschiedene linguistische Fragestellungen zu bearbeiten oder auch die Frage zu beantworten, ob und warum wir E-Mails anders 
        schreiben als Briefe.
    </p>
    <br>
    <h3 class="text-xl text-center">
        Umgang mit den Daten/Pseudonymisierung
    </h3>
    <p> Hinweise an die Spendenden: Bitte spenden Sie ausschließlich E-Mails, die Sie selbst gesendet haben oder bei denen 
        Sie die Zustimmung aller Beteiligten eingeholt haben.  </p>
        <br>
        <h3 class="text-xl text-center">
            Pseudonymisierung der Mails
        </h3>
    <p>Die E-Mails werden automatisch pseudonymisiert. Dazu nutzen wir ein entsprechendes Tool, 
        welches wir im vergangenen Jahr an hunderten Test-E-Mails überprüft haben. Durch die Pseudonymisierung werden alle persönlichen Daten wie Namen, 
        Telefonnummer oder Adressen aus dem E-Mails herausgestrichen und durch Platzhalter wie Name für Sabine Mustermann ersetzt. 
        </p>
        <br>
        <h3 class="text-xl text-center">
            Anzahl und Art der E-Mails
        </h3>
    <p>Es gibt keine Begrenzung. Sie können grundsätzlich so viele E-Mails spenden wie Sie möchten. 
        Die E-Mails können gerne zu den unterschiedlichsten Anlässen und in unterschiedlichsten Situationen geschrieben worden sein. 
        </p> 
        <br>
    <Button class="w-fit" on:click={gotoDonate}>
        Emails spenden
    </Button>

</div>
</main>
