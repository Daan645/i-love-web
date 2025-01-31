<script>
  export let data

  const discussion = data.response.body
  

</script>

<main>
  <a href="/">Ga terug</a>

  <div class="article-wrapper">
  <article>
  {#if discussion}
    <h1>{discussion.title}</h1>
    <p>{@html discussion.body}</p>
    <a href='https://github.com/Daan645/i-love-web/discussions/{discussion.number}' target="_blank">Bekijk discussie op GitHub</a>
  {:else}
    <p>Loading...</p>
  {/if}
</article>
</div>

</main>

<style>


  main > a:first-of-type {
    margin: 2em;
  }

.article-wrapper {
 display: flex;
 justify-content: center;
 height: 100vh;
width: 100vw;
}
article {
  display: flex;
  flex-direction: column;
  margin: 0 1em 1em 0;
  width: 60vw;
  

}

article a, :global(p a){
  display: inline-block;
  align-self: flex-start;
  margin: 0.1em;
}

</style>