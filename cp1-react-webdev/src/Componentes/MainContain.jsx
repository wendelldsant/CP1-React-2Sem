import heroImage from "../images/hero-image.png";

function MainContain() {
    return ( 
        <main>
            <section class="textoMainHome">
                <div>
                    <h1>Crie seus vídeos online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button class = "StandardButton">Começar agora</button>
                </div>
                <div>
                    <img src={heroImage} alt="Imagem de Homem Saltando" />
                </div>
            </section>
        </main>
     );
}

export default MainContain;