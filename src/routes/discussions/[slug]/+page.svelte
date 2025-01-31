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
    margin-top: 5em;
  }

.article-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

article {
margin: 1em;
padding: 1em;
}

</style>