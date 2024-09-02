import React from 'react';
import celular1 from '../assets/celular-1.png';
import celular2 from '../assets/celular-2.png';
import Rodape2 from './Rodape2';

function SobreNos() {
    return (
        <main>
            <section className="homeOutlet">
                <div className="texto">
                    <h1>Bem-vindo à revolução dos vídeos!</h1>
                    <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhôes de seguidores</p>
                    <button type="button" className="StandardButton">Baixe o app</button>
                </div>
                <div className="imagemOutlet">
                    <img src={celular1} alt="Imagem de Homem Saltando" />
                    <img src={celular2} alt="Imagem de Homem Saltando" />
                </div>
            </section>
            <section className="cardsMain">
                <Rodape2 />
            </section>
        </main>
    );
}

export default SobreNos;