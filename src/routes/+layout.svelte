<script lang="ts">
	import { page } from "$app/state";
	import IconGithub from "$lib/components/ui/icons/icon-github.svelte";
	import "$lib/assets/css/all.css";
	import IconSvelte from "$lib/components/ui/icons/icon-svelte.svelte";

	let { children } = $props();
</script>

<header class="h-14 backdrop-blur-xs shadow-none fixed w-screen top-0 z-1">
	<div class="max-w-5xl m-auto flex items-center h-full px-4 justify-between">
		<a href={page.url.origin} class="flex leading-0 items-center gap-2">
			<IconSvelte />
			Svelte
		</a>
		<a
			href="https://github.com/adriansyah-kadir"
			class="btn btn-square btn-ghost"
		>
			<IconGithub />
		</a>
	</div>
</header>
{@render children()}
