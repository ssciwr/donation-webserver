<script lang="ts">
    import { Button } from 'flowbite-svelte'
    import { goto } from '$app/navigation';
    import { t } from '$lib/i18n';
</script>

<main class='p-8 mb-auto'>
<div class="flex justify-center flex-col p-8 mb-auto rounded-lg" style="background-color: rgba(254, 242, 242, 0.6);">

    <h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.about.title}</h1>
    <p>{$t.about.projectDescription}</p>
        <br>
    <p>{$t.about.dataHandling}</p>
    <br>
    <h3 class="text-xl text-center">
        {$t.about.dataHandlingTitle}
    </h3>
    <p>{$t.about.donorNote}</p>
        <br>
        <h3 class="text-xl text-center">
            {$t.about.pseudonymizationTitle}
        </h3>
    <p>{$t.about.pseudonymizationText}</p>
        <br>
        <h3 class="text-xl text-center">
            {$t.about.numberAndTypeTitle}
        </h3>
    <p>{$t.about.numberAndTypeText}</p> 
        <br>
    <Button class="w-fit bg-red-900" href="/donation">
        {$t.about.donateButton}
    </Button>

</div>
</main>
