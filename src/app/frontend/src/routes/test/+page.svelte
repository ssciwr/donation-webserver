<script lang="ts">
    import Map from '$lib/Map2.svelte'

    let stroke = "black";
    let color = 'gray';
    let strokewidth = "0.5";
    function changeStroke(){
        stroke = "red"
        color = 'blue'
    }

	

  </script>

  <style>

 </style>




<Map {stroke} {color} {strokewidth}></Map>

<button on:click={changeStroke}>Change</button>