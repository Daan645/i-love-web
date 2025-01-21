<script>
      let discussions = [];
  let errorMessage = '';

  const fetchDiscussions = async () => {
    const response = await fetch('https://api.github.com/repos/Daan645/i-love-web/discussions', {
      headers: {
        Authorization: `${import.meta.env.GITHUB_TOKEN}`,
      },
    });

    if (response.ok) {
      discussions = await response.json();
    } else {
      errorMessage = 'Er is een fout opgetreden bij het ophalen van de discussies.';
    }
  };

  import Pokeball from '$lib/molecules/Pokeball.svelte';
  import { onMount } from 'svelte';
  onMount(() => {
    fetchDiscussions();
  });
  </script>
  
  <main>
    <h1>Discussies</h1>
  
    {#if errorMessage}
      <p>{errorMessage}</p>
    {:else}
      <ul>
        
        {#each discussions as discussion}
        <ul>
          <li>
            <article>
              <h2>{discussion.title}</h2>
              <Pokeball href={`/discussions/${discussion.number}`} label="bekijk {discussion.title}"></Pokeball>
            </article>
          </li>
        </ul>
        <!-- <li><a href={`/discussions/${discussion.number}`}>{discussion.title}</a></li> -->
        {/each}
      </ul>
    {/if}
    </main>
<style>
main {
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  /* background-image: url("img/background.gif");
  background-size: cover; */
  
}

ul {
  display: flex;
  justify-content: center;
}

li {
  list-style-type: none;
}

article {
  text-align: center;
}

</style>