<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { format } from 'sql-formatter';
	import CodeMirror from 'svelte-codemirror-editor';
	import { sql } from '@codemirror/lang-sql';
	import { codeMirrorStyle } from '../../../config';

	let value = `select supplier_name,city from
(select * from suppliers join addresses on suppliers.address_id=addresses.id)
as suppliers
where supplier_id>500
order by supplier_name asc,city desc;`;
	let query = `select supplier_name,city from
(select * from suppliers join addresses on suppliers.address_id=addresses.id)
as suppliers
where supplier_id>500
order by supplier_name asc,city desc;`;

	function sqlFormat() {
		value = format(value, {
			language: 'mysql',
			tabWidth: 4,
			keywordCase: 'upper',
			linesBetweenQueries: 2
		});
	}
</script>

<svelte:head>
	<title>SQL Formatter</title>
</svelte:head>

<h1>SQL Formatter</h1>

<br />
<CodeMirror
	bind:value
	lang={sql()}
	styles={codeMirrorStyle}
/>
<!-- <Textarea rows="15" bind:value={query} /> -->
<br />
<Button on:click={sqlFormat}>Format</Button>

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
