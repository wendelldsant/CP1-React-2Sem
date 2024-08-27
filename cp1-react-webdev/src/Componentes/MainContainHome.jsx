import heroImage from "../images/hero-image.png";

function MainContainHome() {
    return ( 
        <main>
            <section class="textoMainHome">
                <div class="hero">
                    <h1>Crie seus vídeos online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button class = "StandardButton">Começar agora</button>
                </div>
                <div>
                    <img src={heroImage} alt="Imagem de Homem Saltando" />
                </div>
            </section>
            <section class="redes-sociais">
                <div class="box card1">
                    <h1>01</h1>
                    <h2>Youtube</h2>
                    <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                </div>
                <div class="box card2">
                    <h1>02</h1>
                    <h2>Tiktok</h2>
                    <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                </div>
                <div class="box card3">
                    <h1>03</h1>
                    <h2>Facebook</h2>
                    <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                </div>
                <div class="box card4">
                    <h1>04</h1>
                    <h2>Instagram</h2>
                    <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                </div>
            </section>
        </main>
     );
}

export default MainContainHome;