<script lang="ts">
    import { formatDate } from "$lib/utils.js";
    import { title, description, url } from "$lib/config";
    export let post;
    </script>
    
    <svelte:head>
        <title>{title}</title>
    
        <meta name="description" content={description} />
    
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${url}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content="/images/logo.png" />
      
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
    </svelte:head>
    
    {#key post.slug}
        <a class="card card-hover overflow-hidden w-full max-w-4xl mt-4 mx-4" href={`/posts/${post.slug}.md`}>
            <header class="mb-4">
                {#if post.image}
                    <img src={post.image} alt="blog banner" />
                {/if}
            </header>
    
            <div class="p-4 space-y-4">
                <h3 class="h3" data-toc-ignore>{post.title}</h3>
                <article>
                    <p>
                        {post.description}
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Mailcom project</h6>
                    <small>On {formatDate(post.date)}</small>
                </div>
            </footer>
        </a>
    {/key}