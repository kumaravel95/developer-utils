<script lang="ts">
	import { copyText } from 'svelte-copy';
	import { Copy } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import CodeMirror from 'svelte-codemirror-editor';
	import { sql } from '@codemirror/lang-sql';
	import { codeMirrorStyle } from '../../../config';

	let csvInput = `id,name,amount,Remark
1,"Johnson, Smith, and Jones Co.",345.33,Pays on time
2,"Sam ""Mad Dog"" Smith",993.44,
3,"Barney & Company",0,"Great to work with and always pays with cash."
4,Johnson's Automotive,2344,
`;
	let value = '';

	function convertCSVToSQL() {
		if (!csvInput) return;

		// Split CSV into lines
		const lines = csvInput.split(/\r?\n/).filter((line) => line.trim() !== '');
		if (lines.length < 2) return;

		// Extract headers
		const headers = lines[0].split(',');

		// Infer data types for columns based on the first row with data
		const firstDataRow = parseCSVLine(lines[1]);
		const dataTypes = inferColumnTypes(firstDataRow);

		// Generate CREATE TABLE query
		let tableName = 'your_table_name'; // Change this to your table name
		let createTableQuery = `CREATE TABLE ${tableName} (\n`;
		for (let i = 0; i < headers.length; i++) {
			createTableQuery += `  ${headers[i]} ${dataTypes[i]}`;
			if (i < headers.length - 1) createTableQuery += ',\n';
		}
		createTableQuery += '\n);';

		// Generate INSERT INTO queries
		let insertStatements = [];
		for (let i = 1; i < lines.length; i++) {
			let columns = parseCSVLine(lines[i]);
			let values = columns.map((col) => (col ? `'${col.replace(/'/g, "''")}'` : 'NULL')).join(', ');
			insertStatements.push(`INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${values});`);
		}

		// Combine CREATE TABLE and INSERT INTO queries
		value = createTableQuery + '\n\n' + insertStatements.join('\n');
	}

	function parseCSVLine(line) {
		let columns = [];
		let current = '';
		let inQuotes = false;

		for (let j = 0; j < line.length; j++) {
			if (line[j] === '"' && line[j + 1] === '"') {
				current += '"'; // Handle escaped quotes
				j++;
			} else if (line[j] === '"') {
				inQuotes = !inQuotes;
			} else if (line[j] === ',' && !inQuotes) {
				columns.push(current.trim());
				current = '';
			} else {
				current += line[j];
			}
		}
		columns.push(current.trim()); // Add the last column

		return columns;
	}

	function inferColumnTypes(row) {
		return row.map((v) => {
			if (!v) return 'TEXT'; // Treat empty as TEXT or NULL
			if (!isNaN(v)) {
				if (Number.isInteger(parseFloat(v))) return 'INT';
				return 'FLOAT';
			}
			return 'TEXT';
		});
	}

	function handleFileInput(event) {
		const file = event.target.files[0];
		if (!file) return;

		// Create a FileReader to read the file content
		const reader = new FileReader();
		reader.onload = (e) => {
			csvInput = e.target.result; // Set the file content to csvInput
		};
		reader.readAsText(file); // Read the file as text
	}
</script>

<svelte:head>
	<title>CSV to SQL</title>
</svelte:head>

<h1>CSV to SQL</h1>

<br />
<Textarea rows="15" bind:value={csvInput} />

<br />
<div class="submit-div">
	<Button on:click={convertCSVToSQL}>Convert</Button>
	<Input
		id="csv_file"
		type="file"
		accept=".csv"
		on:change={handleFileInput}
		style="max-width: 300px;"
	/>
</div>

{#if value}
	<p>Output:</p>
	<CodeMirror bind:value lang={sql()} styles={codeMirrorStyle} />
	<Button on:click={() => copyText(value)}>
		<Copy class="mr-2 h-4 w-4" />
		Copy
	</Button>
{/if}

<style>
	h1 {
		margin-top: 0;
		font-size: 1.5em;
		margin-bottom: 20px;
	}
	h2 {
		margin-top: 0;
	}
	.submit-div {
		display: flex;
		column-gap: 20px;
	}
</style>
