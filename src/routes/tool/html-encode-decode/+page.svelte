<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { copyText } from 'svelte-copy';
	import { Copy } from 'lucide-svelte';

	let text = '';

	function encode() {
		text = encodeURIComponent(text);
	}

	function decode() {
		text = decodeURIComponent(text);
	}
</script>

<svelte:head>
	<title>HTML Encode / Decode</title>
</svelte:head>

<h1>HTML Encode / Decode</h1>

<br />
<Textarea rows="15" bind:value={text} />
<br />
<div class="action-contents">
	<Button on:click={encode}>Encode</Button>
	<Button on:click={decode}>Decode</Button>
	<Button on:click={() => copyText(text)}>
		<Copy class="mr-2 h-4 w-4" />
		Copy
	</Button>
</div>

<style>
	h1 {
		margin-top: 0;
		font-size: 1.5em;
		margin-bottom: 20px;
	}
	h2 {
		margin-top: 0;
	}
	.action-contents {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
