<script lang='ts'>
  import "./global.css"
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterBrand, FooterCopyright, FooterLinkGroup, FooterLink, Button } from 'flowbite-svelte'
  import { goto } from '$app/navigation';
  function gotoDonate() {
    goto('/donation');
  }
  let { children } = $props();
</script>


<Navbar fluid>
  <NavBrand href="/">
    <img
      src="/images/Logo_oben_links.svg"
      class="max-w-md h-14"
      alt="Mailcom Logo"
    />
  </NavBrand>
  <NavHamburger  />
  <div class="flex md:order-2">
    <Button size="sm" on:click={gotoDonate} >Datenspende</Button>
  </div>
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <!-- <NavLi href="/tutorial">Tutorial</NavLi> -->
    <!-- <NavLi href="/about">Information</NavLi> -->
    <!-- <NavLi href="/faq">FAQ</NavLi> -->
    <!-- <NavLi href="/blog">Blog</NavLi> -->
  </NavUl>
</Navbar>


  {@render children()}

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
  <hr class="my-6" />
  <FooterCopyright href="/" by="UHEI™" />
</Footer>

