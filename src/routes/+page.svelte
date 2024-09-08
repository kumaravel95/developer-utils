<script lang="ts">
	import { commandItems } from '../config';
	import * as Card from '$lib/components/ui/card/index';
	import { goto } from '$app/navigation';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
	{#each commandItems as group (group.heading)}
		<Card.Root class="w-full">
			<Card.Header>
				<Card.Title>{group.heading}</Card.Title>
				<Card.Description>Select a {group.heading} related tool from the list below:</Card.Description>
			</Card.Header>
			<Card.Content>
				<ul>
					{#each group.items as item (item.label)}
						<li class="mb-2 cursor-pointer flex items-center" on:click={() => goto(item.route)}>
							<svelte:component this={item.icon} class="mr-2 h-4 w-4" />
							<span>{item.label}</span>
						</li>
					{/each}
				</ul>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
