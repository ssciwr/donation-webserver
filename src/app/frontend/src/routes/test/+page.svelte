<script lang="ts">
    import Map from '$lib/Map2.svelte'

    let stroke = "green";
    let color = 'red';
    function changeStroke(){
        stroke = "red"
        color = 'blue'
    }
    	
	function handleMouseOver(e) {
        alert('Mouseover detected!');
		color = 'green';
	}
	function handleMouseOut(e) {
		color = 'red';
	}
  function handleFocus(e) {
    color = 'blue';
  }
  function handleBlur(e) {
    color = 'white';
  }
  </script>

  <style>
 </style>

    <Map {stroke} {color} on:mouseover={handleMouseOver}/>

    <button on:click={changeStroke}>Change</button>