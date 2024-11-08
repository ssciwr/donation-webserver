<script lang='ts'>
  import "../app.postcss"
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,  Footer, FooterBrand, FooterCopyright, FooterLinkGroup, FooterLink, Hr } from 'flowbite-svelte'
</script>

<Navbar>
  <NavBrand href="/">
    <img
      src="/images/logo.png"
      class="max-w-md h-14"
      alt="Mailcom Logo"
    />
    <span class="self-center whitespace-nowrap text-xl dark:text-white">
      Mailcom
    </span>
  </NavBrand>
  <NavHamburger/>
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/blog">Blog</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/donation">Donation</NavLi>
    <NavLi href="/test">Test</NavLi>
  </NavUl>
</Navbar>

<main class='p-8 h-auto'>
  <slot />
</main>

<Footer footerType="logo" class='p-8'>
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href="https://flowbite-svelte.com"
      src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg"
      alt="Romanistisches Seminar Logo"
      name="Romanistisches Seminar"
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