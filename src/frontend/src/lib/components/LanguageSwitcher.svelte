<script lang="ts">
  import { currentLanguage } from '$lib/i18n';
  import type { Language } from '$lib/i18n/translations';

  let className: string = '';
  export { className as class };

  function switchLanguage(lang: Language) {
    currentLanguage.set(lang);
  }

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'de', name: 'Deutsch', flag: 'DE' },
    { code: 'fr', name: 'Français', flag: 'FR' }
  ];
</script>

<div class="relative inline-block text-left {className}">
  <select 
    class="bg-white border-2 border-red-900 rounded-md px-4 py-2 pr-8 text-base font-bold text-gray-900 focus:outline-none cursor-pointer min-w-[80px]"
    on:change={(e) => switchLanguage(e.target.value as Language)}
    value={$currentLanguage}
  >
    {#each languages as lang}
      <option value={lang.code}>
        {lang.flag}
      </option>
    {/each}
  </select>
</div>
