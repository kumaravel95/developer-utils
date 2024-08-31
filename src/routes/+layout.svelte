<script>
	import '../app.css';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="layout-container">
	<!-- Header -->
	<header>
		<Header />
	</header>

	<!-- Main Content Area -->
	<div class="main-content">
		<!-- Sidebar Navigation -->
		<aside class="sidebar">
			<Sidebar />
		</aside>

		<!-- Dynamic Content Area -->
		<main class="content">
			<slot />
			<!-- This will render the content of each page -->
		</main>
	</div>

	<!-- Footer -->
	<footer>
		<Footer />
	</footer>
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
		background-color: #f4f4f4;
	}

	.content {
		flex: 1;
		padding: 16px;
		background-color: #fff;
	}

	header {
		background-color: #333;
		color: #fff;
		padding: 1rem;
	}

	footer {
		background-color: #333;
		color: #fff;
		padding: 1rem;
		text-align: center;
	}
</style>
