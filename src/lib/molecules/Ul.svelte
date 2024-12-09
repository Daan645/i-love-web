<script></script>

<ul>
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li>
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li>
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li>  
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li>
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li>
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li> 
    <li>
        <details>
            <summary>
                Notities
            </summary>
        </details>
    </li> 
</ul>

    <style>

:global(main) {
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;
    list-style-type: none; 
    background-color: #171717; 
    transition: 1.5s ease-in;
    border-radius: 20px;
    border: 5px solid black;

}

li {
    display: flex;
    width: 3vw;
    height: 45vh;
    margin: 1em;
    background-image: url("img/flowers-drawing.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    transition: 0.4s ease-in;
}

li:hover,
li:focus {
transform: translateY(-50px);
}

li:hover::before,
li:focus::before,
li:hover::after,
li:focus::after {
    opacity: 1;
}

li:hover::before,
li:focus::before {
transform: translateY(-40px);
}

li:hover::after,
li:focus::after {
transform: translateY(50px);
}


li::before {
    color: white;
    content: 'titletje';
    position: absolute;
    opacity: 0;
    transition: 0.8s ease-in; 
}

li::after {
    content: '';
    width: 1em;
    height: 1em;
    border: 1px solid white;
    position: absolute;
    border-radius: 100px;
    bottom: 0;
    left: 30%;
    opacity: 0;
    transition: 0.8s ease-out;    
}

details {
    display: flex;
    font-size: 3em;
    margin: 1em;
    justify-content: center;
    align-items: center;
}


summary {
   display: none;
    margin: 0;
list-style-type: none;
}

    </style>