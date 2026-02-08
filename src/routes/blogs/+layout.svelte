<script>
  import Transition from "$lib/components/transition.svelte";
  const { children } = $props();
</script>

<Transition class="w-screen h-screen flex items-center justify-center">
  {@render children()}
</Transition>
