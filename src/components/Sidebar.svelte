<script lang="ts">
	import Code from 'lucide-svelte/icons/code';
	import Link from 'lucide-svelte/icons/link';
	import KeyRound from 'lucide-svelte/icons/key-round';
  import { CaseSensitive } from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import { goto } from '$app/navigation';
</script>

<Command.Root class="max-w-[450px] rounded-lg border shadow-md">
	<Command.Input placeholder="Type to search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Web Tools">
			<Command.Item onSelect={() => goto('/html-encode-decode')}>
				<Code class="mr-2 h-4 w-4" />
				<span>HTML Encode / Decode</span>
			</Command.Item>
			<Command.Item onSelect={() => goto('/url-encode-decode')}>
				<Link class="mr-2 h-4 w-4" />
				<span>URL Encode / Decode</span>
			</Command.Item>
		</Command.Group>
		<Command.Group heading="Password">
			<Command.Item onSelect={() => goto('/password-generator')}>
				<KeyRound class="mr-2 h-4 w-4" />
				<span>Password Generator</span>
			</Command.Item>
		</Command.Group>
    <Command.Group heading="String Manipulation">
			<Command.Item onSelect={() => goto('/uppercase-lowercase')}>
				<CaseSensitive class="mr-2 h-4 w-4" />
				<span>Uppercase / Lowercase</span>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<!-- <Command.Group heading="Settings">
			<Command.Item>
				<User class="mr-2 h-4 w-4" />
				<span>Profile</span>
				<Command.Shortcut>⌘P</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<CreditCard class="mr-2 h-4 w-4" />
				<span>Billing</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<Settings class="mr-2 h-4 w-4" />
				<span>Settings</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
		</Command.Group> -->
	</Command.List>
</Command.Root>
