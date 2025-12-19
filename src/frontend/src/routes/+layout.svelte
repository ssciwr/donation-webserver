<script lang='ts'>
  import '../app.css';
  import { page } from '$app/stores';
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, Button } from 'flowbite-svelte'
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import { t } from '$lib/i18n';
  
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<svelte:head>
  <title>Mailcom</title>
</svelte:head>


<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 relative">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    <a href="/" class="flex items-center">
      <img
        src="/images/Logo_oben_links.svg"
        class="max-w-md h-14"
        alt="Mailcom Logo"
      />
    </a>
    
    <div class="flex items-center lg:order-2">
      <!-- Desktop navigation links -->
      <div class="hidden lg:flex lg:items-center lg:space-x-8 lg:mr-6">
        <a href="/" on:click={closeMenu} class="lg:px-3 lg:py-2 {$page.url.pathname === '/' ? 'bg-red-900 text-white lg:rounded' : 'text-red-900 hover:text-red-700'}">Home</a>
        <a href="/tutorial" on:click={closeMenu} class="lg:px-3 lg:py-2 {$page.url.pathname.startsWith('/tutorial') ? 'bg-red-900 text-white lg:rounded' : 'text-red-900 hover:text-red-700'}">{$t.nav.tutorial}</a>
        <a href="/about" on:click={closeMenu} class="lg:px-3 lg:py-2 {$page.url.pathname.startsWith('/about') ? 'bg-red-900 text-white lg:rounded' : 'text-red-900 hover:text-red-700'}">{$t.nav.about}</a>
        <a href="/team" on:click={closeMenu} class="lg:px-3 lg:py-2 {$page.url.pathname.startsWith('/team') ? 'bg-red-900 text-white lg:rounded' : 'text-red-900 hover:text-red-700'}">{$t.nav.team}</a>
        <a href="/faq" on:click={closeMenu} class="lg:px-3 lg:py-2 {$page.url.pathname.startsWith('/faq') ? 'bg-red-900 text-white lg:rounded' : 'text-red-900 hover:text-red-700'}">{$t.nav.faq}</a>
        <a href="/blog" on:click={closeMenu} class="lg:px-3 lg:py-2 {$page.url.pathname.startsWith('/blog') ? 'bg-red-900 text-white lg:rounded' : 'text-red-900 hover:text-red-700'}">{$t.nav.blog}</a>
      </div>
      
      <Button class="px-4 py-2 rounded-lg bg-custom-100 text-primary-800 mr-2" href="/donation">
        {$t.nav.donation}
      </Button>
      
      <!-- Custom hamburger button -->
      <button 
        type="button" 
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        on:click={toggleMenu}
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
      </button>
      
      <!-- Language switcher - moved to very right -->
      <LanguageSwitcher class="ml-2" />
    </div>
    
    <!-- Mobile menu dropdown - only shows on mobile -->
    <div class="w-full lg:hidden {isMenuOpen ? 'block' : 'hidden'}" class:absolute={isMenuOpen} class:top-full={isMenuOpen} class:left-0={isMenuOpen} class:right-0={isMenuOpen} class:bg-white={isMenuOpen} class:border={isMenuOpen} class:border-gray-200={isMenuOpen} class:shadow-lg={isMenuOpen} class:z-50={isMenuOpen}>
      <ul class="flex flex-col mt-4 font-medium p-4">
        <li>
          <a href="/" on:click={closeMenu} class="block py-2 pr-4 pl-3 rounded {$page.url.pathname === '/' ? 'bg-red-900 text-white' : 'text-red-900 hover:bg-gray-50'}">Home</a>
        </li>
        <li>
          <a href="/tutorial" on:click={closeMenu} class="block py-2 pr-4 pl-3 rounded {$page.url.pathname.startsWith('/tutorial') ? 'bg-red-900 text-white' : 'text-red-900 hover:bg-gray-50'}">{$t.nav.tutorial}</a>
        </li>
        <li>
          <a href="/about" on:click={closeMenu} class="block py-2 pr-4 pl-3 rounded {$page.url.pathname.startsWith('/about') ? 'bg-red-900 text-white' : 'text-red-900 hover:bg-gray-50'}">{$t.nav.about}</a>
        </li>
        <li>
          <a href="/team" on:click={closeMenu} class="block py-2 pr-4 pl-3 rounded {$page.url.pathname.startsWith('/team') ? 'bg-red-900 text-white' : 'text-red-900 hover:bg-gray-50'}">{$t.nav.team}</a>
        </li>
        <li>
          <a href="/faq" on:click={closeMenu} class="block py-2 pr-4 pl-3 rounded {$page.url.pathname.startsWith('/faq') ? 'bg-red-900 text-white' : 'text-red-900 hover:bg-gray-50'}">{$t.nav.faq}</a>
        </li>
        <li>
          <a href="/blog" on:click={closeMenu} class="block py-2 pr-4 pl-3 rounded {$page.url.pathname.startsWith('/blog') ? 'bg-red-900 text-white' : 'text-red-900 hover:bg-gray-50'}">{$t.nav.blog}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<slot />

<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
  <div class="flex items-center gap-3 py-0 my-0">
  <a href="https://www.uni-heidelberg.de/en" class="flex items-center">
    <img 
      src="/images/Logoleiste_SSC_4c.png" 
      alt="Romanisches Seminar Logo"
      class="max-h-12 w-auto"
    />
  </a>
  <a href="https://www.uni-heidelberg.de/rose/" class="flex items-center">
    <span class="text-primary-900 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs whitespace-nowrap font-bold">Romanisches Seminar</span>
  </a>
</div>
    <FooterLinkGroup class="flex flex-wrap items-center gap-6 mb-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 p-0 my-0">
      <FooterLink href="/about">{$t.nav.about}</FooterLink>
      <FooterLink href="https://www.uni-heidelberg.de/en/privacy-statement">Privacy Policy</FooterLink>
      <FooterLink href="/contact">{$t.nav.contact}</FooterLink>
      <FooterLink href="https://www.uni-heidelberg.de/en/imprint">Imprint</FooterLink>
    </FooterLinkGroup>
    </div>
  <hr class="my-0 border-primary-900 sm:mx-auto my-1 dark:border-gray-700" />
  <FooterCopyright href="/" by="UHEI™" class="text-xs py-0 my-0"/>
</Footer>

