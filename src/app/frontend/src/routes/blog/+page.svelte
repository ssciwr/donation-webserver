<script lang="ts">import BlogCard from "$lib/components/BlogCard.svelte";
  export let data;
  </script>
  

  <main class='p-8 h-auto'>

    <h1 class="mb-4 text-4xl font-extrabold center leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Blog</h1>
  
  </main>

  <section class="mb-16">
    <ul class="flex flex-col items-center">
      {#each data.posts as post}
        <BlogCard {post} />
      {/each}
    </ul>
  </section>
