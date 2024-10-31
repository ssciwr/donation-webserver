<script>import "./app.css";
import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
import '../public/global.css';
import Router from "svelte-spa-router";
import Home from "./routes/Home.svelte";
import Impressum from "./routes/Impressum.svelte";

export const routes = {
	  "/": Home,
	  "/impressum": Impressum,
	};</script>


<!--fixed: position is relative to browser window, w-full: full width, z-20: 3d pos (closer)-->
  <header class="fixed w-full z-20 top-0 start-0">
	<!--px/py: padding in x/y direction (one small screens: larger x padding for touch)-->
	<Navbar class="px-2 sm:px-4 py-1.5 bg-slate-300 dark:bg-slate-900">
	  <NavHamburger></NavHamburger>
	  <NavBrand href="#/">
		<img src="/build/logo.png" class="me-3 h-6 sm:h-9" alt="Mailcom Logo" width="250/" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Donate</span>
	  </NavBrand>
	  <NavUl>
		<NavLi href="#/">Home</NavLi>
		<NavLi href="#/impressum">Impressum</NavLi>
	  </NavUl>
	</Navbar>
  
  </header>
  
  <main class="w-screen min-h-dvh bg-slate-200 dark:bg-slate-950">
	<!--overflow-auto: adds scroll bar only if overflow happens (under navbar), w-full: width to parent width, min-h-full: height to parent width (always), px-4: padding to left/right of screen, mx-auto: center horizontally, mt-16: margin to top (this will be "under" navbar)-->
	<div class="flex flex-col overflow-auto w-full min-h-full px-4 mt-16 items-center">
	  <Router {routes}></Router>
	</div>
  </main>
