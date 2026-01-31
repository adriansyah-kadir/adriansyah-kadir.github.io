<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { fade } from "svelte/transition";
  import Image from "./ui/image.svelte";

  const props: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...props} class="avatar {props.class}">
  <div
    in:fade
    class="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2 size-40"
  >
    <Image
      class="hover:scale-110 transition-all duration-500 ease-in-out"
      img={{
        alt: "Adriansyah Github Profile",
        src: "https://avatars.githubusercontent.com/u/99591033?v=4",
      }}
    />
  </div>
</div>
