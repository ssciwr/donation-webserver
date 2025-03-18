<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const ids = data.id;
</script>

<!-- <form method="POST">
	<input required type="int" name="id" />
	<button>Add id</button>
</form> -->

{#each ids as id}
	<div>
		<h1>ID: {id.id}</h1>
	</div>
{/each}