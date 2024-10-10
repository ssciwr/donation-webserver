<script>
	import { Router, Link, links, Route } from "svelte-routing";
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	import '../public/global.css';

    import Home from "./routes/Home.svelte";
    import Impressum from "./routes/Impressum.svelte";

    export let url = "";
</script>

<div use:links>
	<Navbar>
		<NavBrand href="/">
		  <img src="/build/logo.png" class="me-3 h-6 sm:h-9" alt="Mailcom Logo" width=250/>
		</NavBrand>
		<NavUl >
		  <NavLi href="/">Home</NavLi>
		  <NavLi href="/impressum">Impressum</NavLi>
		</NavUl>
	</Navbar>
</div>

<Router {url}>
	<div>
	  <Route path="/impressum" component={Impressum} />
	  <Route path="/"><Home /></Route>
	</div>
</Router>
