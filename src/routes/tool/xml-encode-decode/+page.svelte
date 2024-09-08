<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';

	let str = '';

	function xmlEncode() {
		str = str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;');
	}

	function xmlDecode() {
		str = str
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&apos;/g, "'")
			.replace(/&amp;/g, '&');
	}
</script>

<svelte:head>
	<title>XML Encode Decode</title>
</svelte:head>

<h1>XML Encode Decode</h1>

<br />
<Textarea rows="15" bind:value={str} />
<br />
<Button on:click={xmlEncode}>Encode</Button>
<Button on:click={xmlDecode}>Decode</Button>

<style>
	h1 {
		margin-top: 0;
		font-size: 1.5em;
		margin-bottom: 20px;
	}

	h2 {
		margin-top: 0;
	}
</style>
