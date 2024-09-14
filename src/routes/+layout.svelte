<script>
	import '../app.css';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import CodeDark from '$lib/assets/code-dark.png';
	import { Toaster } from "$lib/components/ui/sonner";
</script>

<svelte:head>
  <link rel="icon" href={CodeDark} />
</svelte:head>

<div class="layout-container">
	<!-- Header -->
	<header>
		<Header />
	</header>
	<hr/>

	<!-- Main Content Area -->
	<div class="main-content">

		<!-- Dynamic Content Area -->
		<main class="content">
			<slot />
			<!-- This will render the content of each page -->
		</main>
	</div>

	<!-- Footer -->
	<hr/>
	<footer>
		<Footer />
	</footer>
	<Toaster />
</div>

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main-content {
		display: flex;
		flex: 1;
	}

	.sidebar {
		width: 250px; /* Adjust the width as needed */
	}

	.content {
		flex: 1;
		padding: 16px;
	}

	header {
		padding: 1rem;
	}

	footer {
		padding: 1rem;
		text-align: center;
	}
</style>
