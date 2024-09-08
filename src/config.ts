// src/config.ts
import { Code, Link, KeyRound, CaseSensitive } from 'lucide-svelte';

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
	}
];