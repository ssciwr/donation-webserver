<script lang="ts">
    import { t } from '$lib/i18n';
    import { asset } from '$app/paths';
</script>

<main class='p-8 mb-auto' data-testid="page-tutorial">
<div class="flex justify-center flex-col p-8 mb-auto rounded-lg" style="background-color: rgba(254, 242, 242, 0.6);">
	
	<h1 class="mb-4 font-extrabold text-center leading-none tracking-tight text-4xl">{$t.tutorial.title}</h1>
	<p class="text-center text-gray-700 mt-4">{$t.tutorial.description}</p>

	<video
		controls
		preload="metadata"
		poster="/images/tutorial-poster.jpg"
		class="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-8"
	>
		<source src="/video/TutorielMailcom_final.mp4" type="video/mp4" />
		{$t.tutorial.videoFallback}
		<a href={asset('/video/TutorielMailcom_final.mp4')} class="text-primary-900 hover:underline">{$t.tutorial.videoDownloadLink}</a>
	</video>

</div>
</main>