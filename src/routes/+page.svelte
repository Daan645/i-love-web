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
    <section>
    <h1>Artikelen</h1>
    <p>Klik op de witte knop van de pokeball om de link weer te geven</p>
  </section>
  
    {#if errorMessage}
      <p>{errorMessage}</p>
    {:else}
      
    <ul>

        {#each discussions as discussion}
          <li>
            <article>
              <h2>{discussion.title}</h2>
              <Pokeball href={`/discussions/${discussion.number}`} label='{discussion.title}' linkText='{discussion.title}' ></Pokeball>
            </article>
          </li>
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


section{
  display: flex;
  flex-direction: column;
  align-items: center;
}


ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Zorgt ervoor dat items naar de volgende regel gaan */
  gap: 1em; /* Ruimte tussen items */
  padding: 0;
  @media (min-width: 950px) {
flex-direction: row;
  }
}

li {
  list-style-type: none;
  margin-bottom: 5em;
  width: calc(33.33% - 1em); /* Zorgt voor drie items per rij, pas aan indien nodig */
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>