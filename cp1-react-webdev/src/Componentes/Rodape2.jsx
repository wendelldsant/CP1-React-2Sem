import React from 'react';
import Plano from './Plano';
import planoCorporativo from '../assets/planoCorporativo.png'

const planos =[
    {
        title: 'Individual',
        inputs: [
            {
                label: '1 Usuário',
                input: '10 Vídeos', 
                span: 'R$15'
            }
        ],
        fundo: '#6975E8',
        corBotao: '#EBE9E9',
        borda: false,
        textoBotao: 'Cadastrar'
    },
    {
        title: 'Profissional',
        inputs: [
            {
                label: '1 - 10 Usuários',
                input: 'Vídeos Ilimitados', 
                span: 'R$40'
            },
            {
                label: '+10 Usuários',
                input: 'Vídeos Ilimitados', 
                span: 'R$20'
            }
        ],
        textoBotao: 'Cadastrar'
    },
    {
        title: 'Corporativo',
        inputs: [],
        img: planoCorporativo,
        textoBotao: 'Entrar em contato'
    },
] 

function Rodape2() {
    return ( 
        <div className='containerPlanos'>
            <h2 className='tituloPlanos'>Planos</h2>
            <div className="planos">
                {planos.map(plano => 
                    <Plano
                        key = {plano.title}
                        fundo = {plano.fundo}
                        corBotao = {plano.corBotao}
                        borda = {plano.borda}
                        titulo = {plano.title}
                        inputs = {plano.inputs}
                        textoBotao = {plano.textoBotao}
                        img = {plano.img}
                    />
                )}
                
                
            </div>
        </div>
     );
}

export default Rodape2;