import { tv } from "tailwind-variants/lite";

export const dialog = tv({
  slots: {
    overlay: "bg-base-300/50 backdrop-blur-xs w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed",
    content: "card card-body bg-base-100 bottom-0 sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 fixed border border-base-300 shadow-xs"
  },
  variants: {
    animation: {
      true: {
        overlay: "data-[state=open]:animate-[fade-in_var(--tw-duration,.3s)] data-[state=closed]:animate-[fade-out_var(--tw-duration,.3s)]",
        content: "data-[state=open]:animate-[fade-in_var(--tw-duration,.3s),zoom-in_var(--tw-duration,.3s)] data-[state=closed]:animate-[fade-out_var(--tw-duration,.3s),zoom-out_var(--tw-duration,.3s)]"
      }
    }
  }
})
