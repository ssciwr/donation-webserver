<script lang='ts'>
  import "../app.postcss"
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,  Footer, FooterBrand, FooterCopyright, FooterLinkGroup, FooterLink, Hr, Button } from 'flowbite-svelte'

  import { goto } from '$app/navigation';
  import './global.css';
	import { fade } from 'svelte/transition';
  function gotoDonate() {
    goto('/donation');
  }
  export let data: { pathname: string };
</script>


<Navbar fluid>
  <NavBrand href="/">
    <img
      src="/images/Logo_oben_links.svg"
      class="max-w-md h-14"
      alt="Mailcom Logo"
    />

  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm" on:click={gotoDonate} >Datenspende</Button>
    <NavHamburger />
  </div>
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/tutorial">Tutorial</NavLi>
    <NavLi href="/about">Information</NavLi>
    <NavLi href="/faq">FAQ</NavLi>
    <NavLi href="/blog">Blog</NavLi>
  </NavUl>
</Navbar>

<main class='p-8 h-auto'>
  {#key data.pathname}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}
</main>

<Footer footerType="logo" class='p-8'>
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href="https://www.uni-heidelberg.de/en"
      src="/images/Logoleiste_SSC_4c.png"
      alt="Romanisches Seminar Logo"
      name="Romanisches Seminar"
    />

    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/impressum">Impressum</FooterLink>
    </FooterLinkGroup>
  </div>
  <Hr class="my-6" />
  <FooterCopyright href="/" by="UHEI™" />
</Footer>