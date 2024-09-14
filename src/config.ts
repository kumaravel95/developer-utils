// src/config.ts
import { Code, Link, KeyRound, CaseSensitive, Database, FileSpreadsheet } from 'lucide-svelte';

export const appConfig = {
	appName: 'Developer Utils',
	version: '1.0.0',
	theme: 'light',
} as const;

export const commandItems = [
	{
		heading: "Web Tools",
		items: [
			{ label: "HTML Encode / Decode", icon: Code, route: "/tool/html-encode-decode" },
			{ label: "XML Encode / Decode", icon: Code, route: "/tool/xml-encode-decode" },
			{ label: "URL Encode / Decode", icon: Link, route: "/tool/url-encode-decode" }
		]
	},
	{
		heading: "Password",
		items: [
			{ label: "Password Generator", icon: KeyRound, route: "/tool/password-generator" }
		]
	},
	{
		heading: "String Manipulation",
		items: [
			{ label: "Uppercase / Lowercase", icon: CaseSensitive, route: "/tool/uppercase-lowercase" }
		]
	},
	{
		heading: "SQL Tools",
		items: [
			{ label: "SQL Formatter", icon: Database, route: "/tool/sql-formatter" },
			{ label: "CSV to SQL", icon: FileSpreadsheet, route: "/tool/csv-sql" }
		]
	}
];

export const codeMirrorStyle = {
	'&': {
		"min-height": '30vh',
		"max-height": '50vh',
		fontSize: '14pt'
	},
	'.cm-gutters': {
		backgroundColor: 'hsl(var(--background) / var(--tw-bg-opacity))',
		color: '#ddd',
		border: 'none'
	},
	".cm-activeLineGutter": {
		backgroundColor: "#e2f2ff"
	}
}