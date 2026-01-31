<script lang="ts">
  import { navigating } from "$app/state";
  import type { WithChildren } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { fly } from "svelte/transition";

  let outro = $state(false);
  const duration = 150;
  const delta = $derived(navigating.delta ?? 1);
  const { children, ...props }: WithChildren<HTMLAttributes<HTMLDivElement>> =
    $props();
</script>

<div
  {...props}
  in:fly={{ delay: duration, x: 20 * delta }}
  out:fly={{ duration: duration, x: -20 * delta }}
  onoutroendcapture={() => {
    outro = true;
  }}
>
  {#if !outro}
    {@render children!()}
  {/if}
</div>
