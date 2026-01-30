<script lang="ts">
  import IconSpinner from "$lib/components/ui/icons/icon-spinner.svelte";
  import { AlertDialog } from "bits-ui";
  import { dialog } from "$lib/components/ui";

  const { content, overlay } = dialog({ animation: true });
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger class="btn btn-info">
    <IconSpinner class="size-4" />
    Subscribe
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay
      class="{overlay()} duration-150"
    />
    <AlertDialog.Content class={content()}>
      <div class="flex flex-col gap-4 pb-6">
        <AlertDialog.Title class="card-title">
          Confirm your transaction
        </AlertDialog.Title>
        <AlertDialog.Description class="text-base-content/80 text-sm">
          This action cannot be undone. This will initiate a monthly wire in the
          amount of $10,000 to Huntabyte. Do you wish to continue?
        </AlertDialog.Description>
      </div>
      <div class="card-actions">
        <AlertDialog.Cancel class="btn btn-soft">Cancel</AlertDialog.Cancel>
        <AlertDialog.Action class="btn btn-info">Continue</AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
