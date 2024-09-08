<script>
	import Sidebar from '../../components/Sidebar.svelte';
</script>

<div class="layout-container">
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
</style>
