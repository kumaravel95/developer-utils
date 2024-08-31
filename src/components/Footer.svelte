<script>
	import { appConfig } from '../config';
	const { appName, version } = appConfig;
</script>

<footer>
	<p>&copy; {new Date().getFullYear()} {appName} {version}. All rights reserved.</p>
</footer>

<style>
	footer p {
		margin: 0;
	}
</style>
