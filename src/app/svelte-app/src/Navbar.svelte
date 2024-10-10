<script>
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
    import Home from "./routes/Home.svelte";
    import Impressum from "./routes/Impressum.svelte";
</script>

<Navbar>
    <NavBrand href="/">
      <img src="/build/logo.png" class="me-3 h-6 sm:h-9" alt="Mailcom Logo" width=250/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mailcom</span>
    </NavBrand>
    <NavHamburger />
    <NavUl >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/routes/impressum">Impressum</NavLi>
    </NavUl>
  </Navbar>

