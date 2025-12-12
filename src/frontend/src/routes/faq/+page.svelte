<script lang="ts">
 import { Section, Faq, FaqItem } from "flowbite-svelte-blocks";
 import { t } from '$lib/i18n';
</script>

<style>
  :global(.faq-grid) {
    column-gap: 3rem !important;
  }
  :global(.grid.grid-cols-1.md\\:grid-cols-2) {
    gap: 3rem !important;
  }
  .faq-column {
    padding: 2rem;
    margin: 1rem;
  }
  :global(.faq-item) {
    border-color: rgb(var(--color-primary-900)) !important;
  }
  :global([data-accordion-target]) {
    border-color: rgb(var(--color-primary-900)) !important;
  }
  :global(.border-gray-200) {
    border-color: rgb(var(--color-primary-900)) !important;
  }
</style>

<main class='p-8 mb-auto'>
<div class="flex justify-center flex-col p-20 mb-auto rounded-lg gap-3" style="background-color: rgba(254, 242, 242, 0.6);">
<Section name="faq">
  <h2 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.faq.title}</h2>
  <p class="text-center text-gray-700 mt-4 mb-6">{$t.faq.description}</p>
  <Faq>
    <div class="faq-column">
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q1.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q1.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q2.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q2.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q3.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q3.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q4.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q4.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q5.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q5.answer}
        <a href="/tutorial" target="_blank" rel="noreferrer" 
          class="text-primary-900 hover:underline">{$t.faq.questions.q5.linkText}</a>
        </p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q6.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q6.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q7.question}{/snippet}
        <p class="text-gray-700">{$t.faq.questions.q7.answer}</p>
        <a href="/team" target="_blank" rel="noreferrer" class="text-primary-900 hover:underline">{$t.faq.questions.q7.linkText}</a>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q8.question}{/snippet}
        <p class="text-gray-700 ">{$t.faq.questions.q8.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q9.question}{/snippet}
        <p class="text-gray-700 ">{$t.faq.questions.q9.answer}
        </p>
        <a href="https://github.com/ssciwr/mailcom" target="_blank" 
         rel="noreferrer" class="text-primary-900 hover:underline">{$t.faq.questions.q9.linkText}</a>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q10.question}{/snippet}
        <p class="text-gray-700 ">{$t.faq.questions.q10.answer}</p>
      </FaqItem>
      </div>
      <div class="faq-column">
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q11.question}{/snippet}
        <p class="mb-2 text-gray-700 ">{$t.faq.questions.q11.answer}</p>
        <ul class="list-disc ps-5 text-gray-700">
          {#each $t.faq.questions.q11.listItems as item}
            <li>{item}</li>
          {/each}
        </ul>
        <p class="mb-2 text-gray-700 ">{$t.faq.questions.q11.afterList}
        </p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q12.question}{/snippet}
        <p class="mb-2 text-gray-700 ">{$t.faq.questions.q12.answer}</p>
        <a href="/about" target="_blank" rel="noreferrer" 
        class="text-primary-900 hover:underline">{$t.faq.questions.q12.linkText}</a> 
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q13.question}{/snippet}
        <p class="text-gray-700 ">{$t.faq.questions.q13.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q14.question}{/snippet}
        <p class="text-gray-700 ">{$t.faq.questions.q14.answer}</p>
      </FaqItem>
      <FaqItem>
        {#snippet h3()}{$t.faq.questions.q15.question}{/snippet}
        <p class="text-gray-700 ">{$t.faq.questions.q15.answer}</p>
      </FaqItem>
      </div>
  </Faq>
</Section>
</div>
</main>