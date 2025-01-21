<script>
    export let href = "#";
    export let label = "";
    // let pokeballButton;
    // let pokeballBottom;
    // function openPokeball () {
    // pokeballBottom.classList.add('pokeball-bottom-open');  // Voeg de class opnieuw toe


    // }

    let isActive = false; // Houdt de staat van de knop bij

// Functie om de klasse om te schakelen bij een klik
function toggleClass() {
  isActive = !isActive;
}
    </script>
    
    <section>
      <button on:click={toggleClass}  class:isOpenButton={isActive} class:disabled={isActive} class="pokeball-link" href="{href}" aria-label="{label}"></button>

      <!-- <a class="pokeball-link" href="{href}" aria-label="{label}"></a> -->
      <figure class:isOpenTop={isActive} class="pokeball-top"></figure>
      <figure  class:isOpenMiddle={isActive} class="pokeball-middle"></figure>
      <figure class:isOpenBottom={isActive} class="pokeball-bottom"></figure>
      <figure class="pokeball-shadow"></figure>

    </section>
    
    <style>
    section {
      width: 15em;
      height: 15em;
      position: relative;
      z-index: 1;
      perspective: 1000px; /* Voor diepte-effect */
    }

    .pokeball-shadow {
    top: 80%;
    left: 15%;
    width: 6em;
    height: 6em;
    position: absolute;
      box-shadow: inset 30px 5px 30px rgba(0, 0, 0, 0.4); /* Binnen schaduw voor realisme */
      border-radius: 100%;
      transform: rotateX(70deg);
    }

    
    figure {
      position: absolute;
      transform-origin: center;
    }
    
    .pokeball-top,
    .pokeball-middle,
    .pokeball-bottom,
    .pokeball-link,
    .pokeball-shadow {
      transition: transform 1s ease-out; /* Soepele overgang */
    }
    
    .pokeball-top,
    .pokeball-middle,
    .pokeball-bottom,
    .pokeball-link {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Schaduw voor 3D-effect */
    }

    .pokeball-top,
    .pokeball-bottom {
      width: 9.5em;
      height: 10em;
      border-radius: 50%;
      top: 10%;
      left: 1%;
      transform-style: preserve-3d;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 20%, rgba(0, 0, 0, 0.4) 80%); /* Radiale gradient voor diepte-effect */
    }
    
    .pokeball-top {
      background-color: red;
      clip-path: inset(0 0 50% 0); /* Toon alleen de bovenste 50% */
    }
    
    .pokeball-middle {
      background-color: black;
      height: 1em;
      width: 9.5em;
      top: 40%;
      left: 1%;
      z-index: 1;
    }
    
    .pokeball-bottom {
      background-color: white;
      clip-path: inset(50% 0 0 0); /* Toon alleen onderste helft */
      box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.4); /* Binnen schaduw voor realisme */
      top: 10%;
    }
 
    .pokeball-link {
      display: inline-block; /* Laat breedte en hoogte werken */
      position: relative;
      background-color: white;
      border: none;
      border-radius: 50%;
      height: 3em;
      width: 3em;
      top: 42%;
      left: 0;
      z-index: 10;
      border: 5px solid black;
      transform-style: preserve-3d;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.4); /* Schaduw voor knop */
    cursor: pointer;
    }
    
    .pokeball-link::before {
      content: " ";
      width: 1.5em;
      height: 1.5em;
      background-color: white;
      border: 2px solid black;
      border-radius: 100%;
      position: absolute;
      top: 10%;
      left: 11%;
    }
    
    .pokeball-link:hover {
    transform: translateX(10%) translateY(4%) rotate3d(1.5, 2, 2, 50deg); /* Draai de X-as met 40 graden */

}

.pokeball-link:hover ~ .pokeball-top {
    transform:  rotate3d(1, 1, 1, 50deg); /* Zelfde voor de pokebal-top */
}

.pokeball-link:hover ~ .pokeball-middle {
    transform: rotate3d(1, 1, 1, 50deg); /* Zelfde voor de pokebal-middle */
}

.pokeball-link:hover ~ .pokeball-bottom {
    transform: rotate3d(1, 1, 1, 50deg); /* Zelfde voor de pokebal-bottom */
}
.pokeball-link:hover ~ .pokeball-shadow {
  box-shadow: inset 40px 20px 40px rgba(0, 1, 1, 0.4); /* Binnen schaduw voor realisme */
  transition: box-shadow 1s ease /* Overgang voor zowel box-shadow als transform */

}

.pokeball-link.disabled:hover {
  transform: none; /* Stop hover-animatie */
  animation: none; /* Stop hover-animatie */
}

.pokeball-link:not(:hover),
.pokeball-top:not(:hover),
.pokeball-middle:not(:hover),
.pokeball-bottom:not(:hover)
{
  transform: none; /* Als hover niet actief is, wordt de oorspronkelijke staat hersteld */
}

.pokeball-shadow:not(:hover) {
box-shadow: inset 30px 5px 30px rgba(0, 0, 0, 0.4); /* Oorspronkelijke schaduw voor realisme */
transition: box-shadow 1s ease /* Overgang voor zowel box-shadow als transform */

}

.pokeball-link.disabled:hover ~ .pokeball-top {
  transform: none;
}

.pokeball-link.disabled:hover ~ .pokeball-middle {
  transform: none;
}

.pokeball-link.disabled:hover ~ .pokeball-bottom {
  transform: none;
}
    
.isOpenButton {
  animation: open-pokeball-button 1s ease-out forwards 0.75s;

}

.isOpenTop {
  animation: open-pokeball-top 1s ease-out forwards 1s;

}

.isOpenMiddle {
  animation: open-pokeball-middle 1s ease-out forwards 1s;

}

.isOpenBottom {
  animation: open-pokeball-bottom 1s ease-out forwards 1s;
}
   


@keyframes open-pokeball-button {
      0% {
        transform: scaleY(1) translateY(0) rotateX(0deg) ;
      }


     

      100% {
        transform: scaleY(1) translateY(-70%) rotateX(20deg);
      }
    }

@keyframes open-pokeball-top {
      0% {
        transform:  scaleY(1)translateY(0) rotateX(0deg) ;
      }


     

      100% {
        transform: scaleY(1.45) translateY(-10%) rotateX(-60deg);

      }
    }

    @keyframes open-pokeball-middle {
      0% {
        transform: scaleY(1) translateY(0) rotateX(0deg) ;
      }


     

      100% {
        transform: translateY(-180%) rotateX(40deg);
      }
    }




    @keyframes open-pokeball-bottom {
      0% {
        transform: scaleY(1) translateY(0) rotateX(0deg) ;
      }


     

      100% {
        transform: scaleY(1.45) translateY(20%) rotateX(60deg);
      }
    }

  

  
    </style>