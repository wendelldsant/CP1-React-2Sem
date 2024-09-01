import React from 'react';
import heroImage from '../assets/hero-image.png';
import Rodape1 from './Rodape1';

function MainContainHome() {
    return (
        <main>
            <section className="homeMain">
                <div>
                    <h1>Crie seus vídeos online</h1>
                    <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <button type="button" className="StandardButton">Começar agora</button>
                </div>
                <div>
                    <img src={heroImage} alt="Imagem de Homem Saltando" />
                </div>
            </section>
            <section className="cardsMain">
                <Rodape1 />
            </section>
        </main>
    );
}

export default MainContainHome;
