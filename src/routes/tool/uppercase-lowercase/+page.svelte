<script lang="ts">
	import { copyText } from 'svelte-copy';
	import { Copy } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { toast } from 'svelte-sonner';

	let text = '';

	function uppercase() {
		text = text.toUpperCase();
	}

	function lowercase() {
		text = text.toLowerCase();
	}
</script>

<svelte:head>
	<title>Uppercase / Lowercase</title>
</svelte:head>

<h1>Uppercase / Lowercase</h1>

<br />
<Textarea rows="15" bind:value={text} />
<br />
<div class="action-contents">
	<Button on:click={uppercase}>Uppercase</Button>
	<Button on:click={lowercase}>Lowercase</Button>
	<Button on:click={() => {
		copyText(text);
		toast.success('Copied to clipboard');
	}}>
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
