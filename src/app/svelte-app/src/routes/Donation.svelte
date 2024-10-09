<script>
	import Form from './Form.svelte';
	import Navbar from './Navbar.svelte';
	import './global.css';
	
	let data = { name: 'Agathe', submissionID: 1, emailType: 'informal' };
	let submittedData = null;
</script>

<Form data={data} onSubmit={(data) => submittedData = data} />

<div>
    <span>Submitted Data</span>
    <pre>
        {JSON.stringify(submittedData, null, 2)}
    </pre>
</div>