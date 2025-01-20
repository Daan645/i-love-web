<script>
  export let data

  const discussion = data.response.body

</script>

<main>

  <a href="/">Ga terug</a>
  {#if discussion}
    <h1>{discussion.title}</h1>
    <p>{discussion.body}</p>
    <p>Aantal comments op deze <b>{discussion.comments}</b></p>
    <a href={discussion.number} target="_blank">Bekijk discussie op GitHub</a>
  {:else}
    <p>Loading...</p>
  {/if}


</main>