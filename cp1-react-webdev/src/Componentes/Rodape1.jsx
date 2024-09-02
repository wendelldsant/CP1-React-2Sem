import React from 'react';
import Card from './Card';

import IconeYoutube from "../assets/icones/iconeYoutube.png";
import IconeTiktok from "../assets/icones/iconeTiktok.png";
import IconeFacebook from "../assets/icones/iconeFacebook.png";
import IconeInstagram from "../assets/icones/IconeInstagram2.png";

const listaCards = [
    {
        titulo: 'Youtube',
        descricao: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.',
        icon: IconeYoutube,
        numero: '01',
        cor: '#F1C2B0'
    },
    {
        titulo: 'Tiktok',
        descricao: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
        icon: IconeTiktok,
        numero: '02',
        cor: '#F9EB98'
    },
    {
        titulo: 'Facebook',
        descricao: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.',
        icon: IconeFacebook,
        numero: '03',
        cor: '#C0D9DD'
    },
    {
        titulo: 'Instagram',
        descricao: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.',
        icon: IconeInstagram,
        numero: '04',
        cor: '#6975E8'
    }
];

function Rodape1() {
    return (
        <div className="cards">
            {listaCards.map((card) => (
                <Card
                    key={card.numero}
                    titulo={card.titulo}
                    descricao={card.descricao}
                    icon={card.icon} // Corrigido para 'icon'
                    numero={card.numero}
                    cor={card.cor}
                />
            ))}
        </div>
    );
}

export default Rodape1;
