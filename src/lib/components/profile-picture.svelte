<script lang="ts">
  import { IsInViewport } from "runed";
  import type { HTMLAttributes } from "svelte/elements";
  import { fade } from "svelte/transition";
  import Image from "./ui/image.svelte";

  let avatar = $state<HTMLDivElement>();
  const props: HTMLAttributes<HTMLDivElement> = $props();
  const inView = new IsInViewport(() => avatar);
</script>

<div bind:this={avatar} {...props} class="avatar {props.class}">
  <div
    transition:fade
    class="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2 size-40"
  >
    {#if inView}
      <Image
        class="hover:scale-110 transition-all duration-500 ease-in-out"
        img={{
          alt: "Adriansyah Github Profile",
          src: "https://avatars.githubusercontent.com/u/99591033?v=4",
        }}
      />
    {/if}
  </div>
</div>
