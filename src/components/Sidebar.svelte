<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Command from '$lib/components/ui/command/index.js';
	import { commandItems } from '../config';

</script>

<Command.Root class="max-w-[450px] rounded-lg border shadow-md">
	<Command.Input placeholder="Type to search..." />
	<Command.List class="max-h-[400px]">
		<Command.Empty>No results found.</Command.Empty>

		{#each commandItems as group (group.heading)}
			<Command.Group heading={group.heading}>
				{#each group.items as item (item.label)}
					<Command.Item style="cursor:pointer" onSelect={() => goto(item.route)}>
						<svelte:component this={item.icon} class="mr-2 h-4 w-4" />
						<span>{item.label}</span>
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}

		<Command.Separator />
	</Command.List>
</Command.Root>
