<script>
  import ProfilePicture from "$lib/components/profile-picture.svelte";
  import experiences from "$lib/data/experiences";
</script>

{@render Hero()}
<div class="bg-base-200 prose-sm sm:prose max-w-none!">
  {@render AboutMe()}
  {@render XPerience()}
  {@render Education()}
</div>

{#snippet Hero()}
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
          <a href="/projects" class="btn btn-primary">Projects</a>
          <a href="/blogs" class="btn">Blogs</a>
        </div>
      </div>
    </div>
  </section>
{/snippet}

{#snippet AboutMe()}
  <section class="max-w-5xl m-auto px-4 py-10">
    <h2>Profile</h2>
    <p>
      I am a software developer with a strong interest in system-level
      programming, web development, and applied technology. I enjoy building
      things from the ground up—whether it's backend services, embedded systems,
      or full-stack applications—and I like understanding <b
        >how things work internally</b
      >, not just using frameworks.
    </p>
    <p>
      I have hands-on experience working in real-world environments, handling
      both development and IT operations. I’m comfortable learning new
      technologies quickly, solving practical problems, and working
      independently or in a team.
    </p>
  </section>
{/snippet}

{#snippet XPerience()}
  <section id="experience" class="max-w-5xl m-auto px-4 py-10">
    <h2>Experience</h2>
    {#each experiences as x}
      <h3 class="mt-0">{x.name}</h3>
      <p class="col-start-2">
        <strong>{x.desc}</strong><br />
        <em>{x.date}</em>
      </p>
      <ul>
        {#each x.does as d}
          <li>{@html d}</li>
        {/each}
      </ul>
    {/each}
  </section>
{/snippet}

{#snippet Education()}
  <section id="education" class="max-w-5xl m-auto px-4 py-10">
    <h2>Education</h2>

    <article>
      <h3>Universitas Ichsan Gorontalo</h3>
      <p>
        <strong>Bachelor’s Degree</strong>
      </p>
      <small>2021 ~ 2025</small>
      <ul>
        <li>Focused on computer science and information technology.</li>
        <li>
          Developed foundational knowledge in programming, systems, and software
          development.
        </li>
      </ul>
    </article>
  </section>
{/snippet}
