<script>
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import Button from './Button.svelte';
	
	export let data = {};
	export let onSubmit = () => {};

	let name = data.name ?? '';
	let submissionID = data.submissionID ?? 2;
	let emailType = data.emailType ?? 'informal';
	let errors = {};
	let touchedFields = {};
	
	$: result = {
		name, submissionID, emailType
	};
	
	$: errors = validate(touchedFields, result);

	const validate = () => {
		const errors = {};
		if (touchedFields.name && name === '') {
			errors.name = 'Name is required';
		}
		if (touchedFields.submissionID && submissionID < 0) {
			errors.submissionID = 'submission ID should be at least 0';
		}
		if (touchedFields.emailType && touchedFields.submissionID && emailType === 'informal' && submissionID >= 10 && submissionID <= 20) {
			errors.emailType = 'For email type "informal" submission ID should not be between 10 and 20';
		}
		return errors;
	};
	
	const validateAndSubmit = () => {
		touchedFields = { name: true, submissionID: true, emailType: true };
		if (!Object.keys(errors).submissionID) {
			onSubmit(result);
		}
	};
</script>

<div class="form">
	<fieldset class="fieldset">
		<legend>Submit data</legend>
		<Input
			type="text"
			label="Name"
			bind:value={name}
			on:blur={() => touchedFields.name = true}
			error={errors.name}
		/>
		<Input
			type="number"
			label="Submission ID"
			bind:value={submissionID}
			on:blur={() => touchedFields.submissionID = true}
			error={errors.submissionID}
		/>
		<Select
			label="Type"
			bind:value={emailType}
			on:blur={() => touchedFields.emailType = true}
			error={errors.emailType}
		>
			<option value="informal">informal</option>
			<option value="formal">formal</option>
		</Select>
		<Button on:click={validateAndSubmit}>Submit</Button>
		<div>
			<pre>
				{JSON.stringify(result, null, 2)}
			</pre>
		</div>
	</fieldset>
</div>


<style>
	.fieldset > * {
		display: block;
	}
	
	.fieldset > :global(:not(legend) + *) {
		margin-top: 16px;
	}
	
	.fieldset {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 20px;
	}
</style>