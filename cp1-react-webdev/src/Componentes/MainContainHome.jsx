import heroImage from "../images/hero-image.png";
import Cards from "./Cards";

function MainContainHome() {
    const cards = [
        {
            color: 'yellow',
            numero: '1',
            rede: 'Youtube',
            texto: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.'
        },
        {
            color: 'blue',
            numero: '2',
            rede: 'Tiktok',
            texto: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.'
        },
        {
            color: 'red',
            numero: '3',
            rede: 'Facebook',
            texto: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.'
        },
        {
            color: 'green',
            numero: '4',
            rede: 'Instagram',
            texto: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.'
        }
    ]
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
                <Cards conteudo = {cards}/>
            </section>
        </main>
     );
}

export default MainContainHome;