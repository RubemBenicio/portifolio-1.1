const template = document.createElement('template');
template.innerHTML=`
<style>
    :host { display: block;} /* Define o comportamento do container */
    nav{
        background-color: #b692ff;
        width: 100%;
        height: 10vh;
        position: fixed;
        border: #5100a8 solid 0.1vh;
        border-radius: 0vh 0vh 3vh 3vh;
        z-index: 1;
        padding: 0;
        top: 0;
        left: 0;
        box-shadow: .1vh .1vh .9vh #5100a8;
    }
    nav ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin:0;
    }

    nav ul li{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        list-style: none;
        text-align: center;
        min-width: 8vw;
        height: 10vh;

    }
    nav ul li a{
        padding:1vw 2vh;
        text-decoration: none;
        color: #5100a8;
        border: 0vh solid #5100a8;
        border-radius: 0.5vh;
    }
    nav ul li a:hover{
        color: white;
        border: 0.1vh, solid #fff;
        transition: 0.3s;
    }
    nav ul li img{
        width: 5vh;
        border-radius: 100%;
    }
    @media (max-width:700px){
        ul{
            padding: 0;
            margin: 0;
        }
        nav ul li{
            width: 17vw;transform: scale(.8)
        }
        nav ul li a{
            padding: 1vw 1vh;
            ;
        }
    }
</style>
<nav>
    <ul>
        <li><a href="/index.html">Inicio</a></li>
        <li><a href="/sobre/sobre.html">Sobre</a></li>
        <li>
                <img src="./assets/3fc21e823c2abfa0efb5ecb2fb145444.jpg" alt="Gato">
        </li>
        <li><a href="/projetos/projetos.html">Projetos</a></li>
        <li><a href="/formacao/formacoes.html">Formações</a></li>
    </ul>
</nav>
`;

class MainNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // O "b" precisa ser minúsculo: connectedCallback
    connectedCallback() {
        const links = this.shadowRoot.querySelectorAll('a');
        
        links.forEach(link => {
            // Removemos espaços ou barras extras para a comparação ser exata
            const linkPath = new URL(link.href).pathname;
            const currentPath = window.location.pathname;

            if (linkPath === currentPath) {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Impede o clique
                    console.log("Você já está nesta página!");
                });
                link.style.opacity = "0.7"; // Corrigido de "o.7" para "0.7"
                link.style.cursor = "default";
                link.style.pointerEvents = "none"; // Garante que nem o hover funcione
            }
        });
    }
}
customElements.define('nav-bar', MainNav);