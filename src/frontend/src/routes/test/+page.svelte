<script lang="ts">
import Map from '$lib/world_map_benhodgson_markedup-svg-worldmap.svelte'
let cc: string = '';

</script>

<Map bind:cc/> 
<h1 class="text-gray-900" >Country {cc} selected</h1>
