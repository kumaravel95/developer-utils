<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Slider } from '$lib/components/ui/slider';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import CodeMirror from 'svelte-codemirror-editor';
	import { codeMirrorStyle } from '../../../config';

	let value = '';
	let passwordLength = [12];
	let passwordQuantity = [1];
	let includeUppercase = true;
	let includeLowercase = true;
	let includeNumbers = true;
	let includeSymbols = true;
	let includeXmlSymbols = true;

	// Watch each relevant variable to trigger password generation
	$: passwordLength, generatePassword();
	$: passwordQuantity, generatePassword();
	$: includeUppercase, generatePassword();
	$: includeLowercase, generatePassword();
	$: includeNumbers, generatePassword();
	$: includeSymbols, generatePassword();
	$: includeXmlSymbols, generatePassword();

	function generatePassword() {
		passwordLength[0] = passwordLength[0] > 50 ? 50 : (passwordLength[0] < 4 ? 4 : passwordLength[0]);
		passwordQuantity[0] = passwordQuantity[0] > 15 ? 15 : (passwordQuantity[0] < 1 ? 1 : passwordQuantity[0]);
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
			symbolChars += '&<>"\''; // Add XML special characters if selected
		} else {
			// Exclude XML special characters if not selected
			symbolChars = symbolChars.replace(/[&<>"']/g, '');
		}

		if (charPool.length === 0) {
			value = '';
			return;
		}

		value = Array(Number(passwordQuantity[0]))
			.fill('')
			.map(() =>
				Array(Number(passwordLength[0]))
					.fill('')
					.map(() => charPool[Math.floor(Math.random() * charPool.length)])
					.join('')
			)
			.join('\n'); // Join multiple passwords with a newline character
	}
</script>

<svelte:head>
	<title>Password Generator</title>
</svelte:head>

<h1>Password Generator</h1>

<CodeMirror
	bind:value
	styles={codeMirrorStyle}
/>
<!-- <Textarea rows="15" bind:value={password} readonly class="typewriter-font" /> -->

<br />
<div>
	<label>Number of Passwords: {passwordQuantity[0]}</label>
	<div class="slider-input-container">
		<Slider bind:value={passwordQuantity} min={1} max={15} step={1} />
		<Input type="number" bind:value={passwordQuantity[0]} min="1" max="15" />
	</div>
</div>

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
	<label for="xmlSymbols">Include &, &lt;, &gt;, &quot;, &apos; (XML unsafe)</label>
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
