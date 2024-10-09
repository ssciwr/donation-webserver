<button type="button" class="button" on:click>
	<slot />
</button>

<style>	
	.button {
		border-radius: 4px;
		border-color: #a0c0f0;
		background-color: #acf;
		color: #124;
		transition: .2s ease all;
		padding: 6px 10px;
	}

	.button:hover {
		border-color: #b0d0f0;
		background-color: #bdf;
		color: #248;
	}
</style>