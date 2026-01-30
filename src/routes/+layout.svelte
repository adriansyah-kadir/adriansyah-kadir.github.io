<script lang="ts">
	import { page } from "$app/state";
	import "$lib/assets/css/tailwind.css";
	import IconGithub from "$lib/components/ui/icons/icon-github.svelte";
	import IconMail from "$lib/components/ui/icons/icon-mail.svelte";

	let { children } = $props();
</script>

<header
	class="h-14 glass backdrop-blur-xs shadow-none border-b border-base-300 sticky top-0"
>
	<div class="max-w-5xl m-auto flex items-center h-full px-4 justify-between">
		<a href={page.url.origin}>Adriansyah</a>
		<div class="sm:flex gap-4 hidden">
			<a href="/blogs">Blogs</a>
			<a href="/projects">Projects</a>
		</div>
		<div class="flex">
			<a
				href="mailto:adriansyahkadir.work@gmail.com"
				class="btn btn-square btn-link"
			>
				<IconMail />
			</a>
			<a
				href="https://github.com/adriansyah-kadir"
				class="btn btn-square btn-link"
			>
				<IconGithub />
			</a>
		</div>
	</div>
</header>
{@render children()}
