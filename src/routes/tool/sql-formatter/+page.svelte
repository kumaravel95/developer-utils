<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { format } from 'sql-formatter';

	let query = `select supplier_name,city from
(select * from suppliers join addresses on suppliers.address_id=addresses.id)
as suppliers
where supplier_id>500
order by supplier_name asc,city desc;`;

	function sqlFormat() {
		query = format(query, {
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
<Textarea rows="15" bind:value={query} />
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
