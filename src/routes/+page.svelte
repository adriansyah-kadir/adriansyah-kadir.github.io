<script>
  import ProfilePicture from "$lib/components/profile-picture.svelte";
</script>

<section
  class="max-w-5xl h-screen m-auto px-4 py-10 flex items-center justify-center"
>
  <div
    class="px-5 grid sm:grid-cols-[auto_1fr] grid-cols-1 gap-x-10 gap-y-5 items-center"
  >
    <ProfilePicture class="row-span-2" />
    <div></div>
    <div>
      <h2 class="text-3xl">Adriansyah Kadir, S.Kom</h2>
      <small>Fullstack, Data Science</small>
      <div class="mt-2 space-x-2">
        <button class="btn btn-primary">Projects</button>
        <button class="btn">Blogs</button>
      </div>
    </div>
  </div>
</section>

<div class="bg-base-200">
  <section class="max-w-5xl m-auto px-4 py-10">
    <p class="text-justify">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat animi
      doloremque magnam placeat itaque recusandae, nisi quisquam quasi, a,
      officia distinctio quo exercitationem? Cumque omnis debitis facilis
      doloremque quis blanditiis?
    </p>
  </section>

  <section class="max-w-5xl m-auto px-4 py-10">
    <h2 class="text-2xl mb-3">Xperience</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat animi
      doloremque magnam placeat itaque recusandae, nisi quisquam quasi, a,
      officia distinctio quo exercitationem? Cumque omnis debitis facilis
      doloremque quis blanditiis?
    </p>
  </section>

  <section class="max-w-5xl m-auto px-4 py-10">
    <h2 class="text-2xl mb-3">Education</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat animi
      doloremque magnam placeat itaque recusandae, nisi quisquam quasi, a,
      officia distinctio quo exercitationem? Cumque omnis debitis facilis
      doloremque quis blanditiis?
    </p>
  </section>
</div>
