<script lang="ts">
  import { watch } from "runed";
  import type { HTMLImgAttributes, HTMLAttributes } from "svelte/elements";

  const {
    img,
    ...props
  }: HTMLAttributes<HTMLDivElement> & { img: HTMLImgAttributes } = $props();
  let imgEl = $state<HTMLImageElement>();
  let loaded = $state(false);

  watch(
    () => imgEl,
    (el) => {
      el?.addEventListener("load", () => (loaded = true));
    },
  );
</script>

<div {...props} class="relative skeleton {props.class}">
  <img
    {...img}
    bind:this={imgEl}
    class={[
      "transition-all opacity-0 relative scale-90",
      { "opacity-100 scale-100": loaded },
    ]}
  />
</div>
