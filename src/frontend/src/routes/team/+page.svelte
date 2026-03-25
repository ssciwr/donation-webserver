<script lang="ts">
    import { t } from '$lib/i18n';
    import { Button, P, List, Li } from 'flowbite-svelte'
	import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<main class='p-8 mb-auto'>
<div class="flex justify-center flex-col p-8 mb-auto rounded-lg" style="background-color: rgba(254, 242, 242, 0.6);">
	
	<h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.team.title}</h1>
	
	<div class="flex justify-center mt-8">
		<img src="/images/Teamfoto_bearbeitet_V1.jpg" alt="MailCom research team" class="max-w-full h-auto rounded-lg shadow-lg" />
	</div>
	<br>

	<h3 class="text-xl text-center">
        {$t.team.ResearchTeam}
    </h3>
	<h4 class="text-l text-center italic">
        {$t.team.ResearchTeamSubHeading1}
    </h4>
	<P class="text-left text-gray-700 mt-4" weight="bold" >{$t.team.PhDStudent1}</P>
	<P class="text-left text-gray-700 mt-4">{$t.team.PhDStudent1Description}</P>
	<div style="height: 4px;"></div>
	<Button class="w-fit bg-red-900 xs" pill href="https://www.hcts.uni-heidelberg.de/en/centre/people-a-z/laura-gartner">
		<ArrowRightOutline class="h-6 w-6" />
        {$t.team.PhDStudent1LinkText}
    </Button>
	<br>
	<h4 class="text-l text-center italic">
        {$t.team.ResearchTeamSubHeading2}
    </h4>
    <List class="text-left text-gray-700 mt-4 circle-list">
      <Li> {$t.team.StudentAssistant1}</Li>
      <Li> {$t.team.StudentAssistant2}</Li>
      <Li> {$t.team.StudentAssistant3}</Li>
    </List>
	<br>
	<h4 class="text-l text-center italic">
        {$t.team.ResearchTeamSubHeading3}
    </h4>
	<P class="text-left text-gray-700 mt-4" weight="bold" >{$t.team.TeamLead}</P>
	<P class="text-left text-gray-700 mt-4">{$t.team.TeamLeadDescription}</P>
	<div style="height: 4px;"></div>
	<Button class="w-fit bg-red-900 xs" pill href="https://www.uni-heidelberg.de/rose/personen/grosse.html">
		<ArrowRightOutline class="h-6 w-6" />
        {$t.team.TeamLeadLinkText}
    </Button>
	<br>
	<h3 class="text-xl text-center">
        {$t.team.RSETeam}
    </h3>
	<List class="text-left text-gray-700 mt-4 circle-list">
      <Li> {$t.team.RSETeam1}</Li>
      <Li> {$t.team.RSETeam2}</Li>
    </List>
	<div style="height: 4px;"></div>
	<Button class="w-fit bg-red-900 xs" pill href="https://www.ssc.uni-heidelberg.de">
		<ArrowRightOutline class="h-6 w-6" />
        {$t.team.RSELinkText}
    </Button>
	<br>
	<P class="text-left text-gray-700 mt-4" weight="bold" >{$t.team.FundingInfo}</P>
	<br>
	<h4 class="text-l text-center italic">
        {$t.team.Publications}
    </h4>
	<List class="text-left text-gray-700 mt-4 circle-list">
      <Li> {$t.team.Publication1} 
	  <a href="https://doi.org/10.11588/heibooks.1288.c18070" target="_blank" rel="noreferrer" 
          class="text-primary-900 hover:underline">[{$t.team.DOIText}]</a> </Li>
      <Li> {$t.team.Publication2} 
	  <a href="https://dx.doi.org/10.2139/ssrn.6083118" target="_blank" rel="noreferrer" 
          class="text-primary-900 hover:underline">[{$t.team.DOIText}]</a> </Li>
    </List>
	<br>
</div>
</main>





