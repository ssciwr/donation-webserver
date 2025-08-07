<script lang='ts'>
  import '../app.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterBrand, FooterCopyright, FooterLinkGroup, FooterLink, Button, DarkMode } from 'flowbite-svelte'
</script>

<Navbar fluid={true}>
  <NavBrand href="/">
    <img
      src="/images/Logo_oben_links.svg"
      class="max-w-md h-14"
      alt="Mailcom Logo"
    />
  </NavBrand>
  <NavHamburger/>
  <NavUl>
    <NavLi class="text-red-900" href="/">Home</NavLi>
    <NavLi href="/tutorial">Tutorial</NavLi>
    <NavLi href="/about">Information</NavLi>
    <NavLi href="/faq">FAQ</NavLi>
    <NavLi href="/blog">Blog</NavLi>
  </NavUl>
</Navbar>

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
    <span class="text-primary-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs whitespace-nowrap font-bold">Romanisches Seminar</span>
  </a>
</div>
    <FooterLinkGroup class="flex flex-wrap items-center gap-6 mb-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 p-0 my-0">
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="https://www.uni-heidelberg.de/en/privacy-statement">Privacy Policy</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="https://www.uni-heidelberg.de/en/imprint">Imprint</FooterLink>
    </FooterLinkGroup>
    </div>
  <hr class="my-0 border-primary-900 sm:mx-auto my-1 dark:border-gray-700" />
  <FooterCopyright href="/" by="UHEI™" class="text-xs py-0 my-0"/>
</Footer>

