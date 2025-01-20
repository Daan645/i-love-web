<script>

</script>

<section>
<figure class="pokeball-top"></figure>
<figure class="pokeball-middle"></figure>
<button id="pokeballButton" aria-label="poke button"></button>
<figure class="pokeball-bottom"></figure>
</section>

<style>

section {
    width: 15em;
    height: 15em;
    position: relative;
    z-index: 1;
}

figure {
position: absolute;
}

.pokeball-top, .pokeball-bottom {
    width: 10em;
    height: 10em;
    border-radius: 100%;
    top: 10%;
    left: 1%;
}


.pokeball-top {
    background-color: red;
    clip-path: inset(0 0 50% 0); /* Toon alleen de bovenste 50% */

}

.pokeball-middle {
    background-color: black;
   height: 1em;
   width: 10em;
   top: 40%;
   left: 1%;
   z-index: 1;
}

#pokeballButton {
    position: relative;
    background-color:white;
    border: none;
   border-radius: 100%;
   height: 4em;
   width: 4em;
   top: 40%;
   left: 40%;
   z-index: 10;
   border: 5px solid black;
   transition: 0.2s ease;
}

#pokeballButton::before {
    content: " ";
    width: 2em;
    height: 2em;
    background-color: white;
    border: 2px solid black;
    border-radius: 100%;
    position: absolute;
    top: 15%;
    left: 15%;

}

#pokeballButton:hover {
    scale: 1.2;
}

.pokeball-bottom {
    background-color: white;
    clip-path: inset(50% 0 0 0); /* Toon alleen de bovenste 50% */
}


</style>