<script>
	import { appConfig } from '../config';
	import { goto } from '$app/navigation';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { onMount } from 'svelte';
	import Github from '$lib/assets/github.svg';
	import GithubWhite from '$lib/assets/github-white.svg';
	import Code from '$lib/assets/code.png';
	import CodeDark from '$lib/assets/code-dark.png';

	const { appName } = appConfig;

	let isDarkMode = false;

	onMount(async () => {
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (prefersDarkScheme) {
			isDarkMode = true;
			document.documentElement.classList.add('dark');
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			console.log();
			const prefersDarkScheme = event.matches;
			if (prefersDarkScheme) {
				isDarkMode = true;
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	});

	// Check if the user has set a dark mode preference
	if (typeof window !== 'undefined') {
		isDarkMode = localStorage.getItem('darkMode') === 'true';
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		}
	}
	function toggleDarkMode() {
		isDarkMode = !isDarkMode;

		if (typeof window !== 'undefined') {
			localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
			document.documentElement.classList.toggle('dark', isDarkMode);
		}
	}
</script>

<nav>
	<h1 on:click={() => goto('/')}>
		<div class="logo-contents">
			{#if isDarkMode}
				<img src={CodeDark} alt="Developer Utils" />
			{:else}
				<img src={Code} alt="Developer Utils" />
			{/if}
			<b>{appName}</b>
		</div>
	</h1>
	<div class="logo-contents">
		<a target="_blank" href="https://github.com/kumaravel95/developer-utils">
			{#if isDarkMode}
				<img src={GithubWhite} alt="Github" />
			{:else}
				<img src={Github} alt="Github" />
			{/if}
		</a>
		<a class="theme-change" on:click={toggleDarkMode}>
			{#if isDarkMode}
				<Sun className="mr-2 h-4 w-4" size={32} />
			{:else}
				<Moon className="mr-2 h-4 w-4" size={32} />
			{/if}
		</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo-contents {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.theme-change {
		cursor: pointer;
	}

	h1 {
		margin: 0;
		cursor: pointer;
	}
</style>
