<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Slider } from '$lib/components/ui/slider';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';

	let password = '';
	let passwordLength = [12];
	let includeUppercase = true;
	let includeLowercase = true;
	let includeNumbers = true;
	let includeSymbols = true;
	let includeXmlSymbols = true;

	// Watch each relevant variable to trigger password generation
	$: passwordLength, generatePassword();
	$: includeUppercase, generatePassword();
	$: includeLowercase, generatePassword();
	$: includeNumbers, generatePassword();
	$: includeSymbols, generatePassword();

	function generatePassword() {
		const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
		const numberChars = '0123456789';
		let symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

		let charPool = '';
		if (includeUppercase) charPool += uppercaseChars;
		if (includeLowercase) charPool += lowercaseChars;
		if (includeNumbers) charPool += numberChars;
		if (includeSymbols) charPool += symbolChars;

		if (includeXmlSymbols) {
			symbolChars += '&<>"'; // Add XML special characters if selected
		} else {
			// Exclude XML special characters if not selected
			symbolChars = symbolChars.replace(/[&<>"']/g, '');
		}

		if (charPool.length === 0) {
			password = '';
			return;
		}

		password = Array(Number(passwordLength[0]))
			.fill('')
			.map(() => charPool[Math.floor(Math.random() * charPool.length)])
			.join('');
	}
</script>

<svelte:head>
	<title>Password Generator</title>
</svelte:head>

<h1>Password Generator</h1>

<Textarea rows="5" bind:value={password} readonly class="typewriter-font" />

<br />
<div>
	<label>Password Length: {passwordLength[0]}</label>
	<div class="slider-input-container">
		<Slider bind:value={passwordLength} min={4} max={50} step={1} />
		<Input type="number" bind:value={passwordLength[0]} min="4" max="50" />
	</div>
</div>

<div>
	<Checkbox id="uppercase" bind:checked={includeUppercase} />
	<label for="uppercase">Include Uppercase Letters</label>
</div>
<div>
	<Checkbox id="lowercase" bind:checked={includeLowercase} />
	<label for="lowercase">Include Lowercase Letters</label>
</div>
<div>
	<Checkbox id="numbers" bind:checked={includeNumbers} />
	<label for="numbers">Include Numbers</label>
</div>
<div>
	<Checkbox id="symbols" bind:checked={includeSymbols} />
	<label for="symbols">Include Symbols</label>
</div>
<div style="padding-left: 20px;">
	<Checkbox id="xmlSymbols" bind:checked={includeXmlSymbols} disabled={!includeSymbols} />
	<label for="xmlSymbols">Include &, &lt;, &gt;, &quot;</label>
</div>

<Button on:click={generatePassword}>Generate Password</Button>

<style>
	h1 {
		margin-top: 0;
		font-size: 1.5em;
		margin-bottom: 20px;
	}
	div {
		margin-bottom: 10px;
	}
	.slider-input-container {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 50%;
	}
	input[type='number'] {
		width: 50px;
		text-align: center;
	}

	.typewriter-font {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
