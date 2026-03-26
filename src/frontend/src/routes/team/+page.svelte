<script lang="ts">
    import { t } from '$lib/i18n';
    import { Button, P, List, Li } from 'flowbite-svelte'
	import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<main class='p-8 mb-auto' data-testid="page-team">
<div class="flex justify-center flex-col p-8 mb-auto rounded-lg" style="background-color: rgba(254, 242, 242, 0.6);">
	
	<h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.team.title}</h1>
	
	<div class="flex justify-center mt-8">
		<img src="/images/Teamfoto_bearbeitet_V1.jpg" alt="MailCom research team" class="max-w-full h-auto rounded-lg shadow-lg" />
	</div>
	<br>

	<h3 class="text-xl text-center">
        {$t.team.researchTeam}
    </h3>
	<h4 class="text-center italic">
        {$t.team.researchTeamSubHeading1}
    </h4>
	<P class="text-left text-gray-700 mt-4" weight="bold" >{$t.team.phDStudent1}</P>
	<P class="text-left text-gray-700 mt-4">{$t.team.phDStudent1Description}</P>
	<div style="height: 4px;"></div>
	<Button class="w-fit bg-red-900 xs" pill href="https://www.hcts.uni-heidelberg.de/en/centre/people-a-z/laura-gartner">
		<ArrowRightOutline class="h-6 w-6" />
        {$t.team.phDStudent1LinkText}
    </Button>
	<br>
	<h4 class="text-center italic">
        {$t.team.researchTeamSubHeading2}
    </h4>
    <List class="text-left text-gray-700 mt-4">
      <Li> {$t.team.studentAssistant1}</Li>
      <Li> {$t.team.studentAssistant2}</Li>
      <Li> {$t.team.studentAssistant3}</Li>
    </List>
	<br>
	<h4 class="text-center italic">
        {$t.team.researchTeamSubHeading3}
    </h4>
	<P class="text-left text-gray-700 mt-4" weight="bold" >{$t.team.teamLead}</P>
	<P class="text-left text-gray-700 mt-4">{$t.team.teamLeadDescription}</P>
	<div style="height: 4px;"></div>
	<Button class="w-fit bg-red-900 xs" pill href="https://www.uni-heidelberg.de/rose/personen/grosse.html">
		<ArrowRightOutline class="h-6 w-6" />
        {$t.team.teamLeadLinkText}
    </Button>
	<br>
	<h3 class="text-xl text-center">
        {$t.team.rSETeam}
    </h3>
	<List class="text-left text-gray-700 mt-4">
      <Li> {$t.team.rSETeam1}</Li>
      <Li> {$t.team.rSETeam2}</Li>
    </List>
	<div style="height: 4px;"></div>
	<Button class="w-fit bg-red-900 xs" pill href="https://www.ssc.uni-heidelberg.de">
		<ArrowRightOutline class="h-6 w-6" />
        {$t.team.rSELinkText}
    </Button>
	<br>
	<P class="text-left text-gray-700 mt-4" weight="bold" >{$t.team.fundingInfo}</P>
	<br>
	<h4 class="text-center italic">
        {$t.team.publications}
    </h4>
	<List class="text-left text-gray-700 mt-4">
      <Li> {$t.team.publication1} 
	  <a href="https://doi.org/10.11588/heibooks.1288.c18070" target="_blank" rel="noreferrer" 
          class="text-primary-900 hover:underline">[{$t.team.dOIText}]</a> </Li>
      <Li> {$t.team.publication2} 
	  <a href="https://dx.doi.org/10.2139/ssrn.6083118" target="_blank" rel="noreferrer" 
          class="text-primary-900 hover:underline">[{$t.team.dOIText}]</a> </Li>
    </List>
	<br>
</div>
</main>





