import React from 'react';
import IconeTwitter from '../assets/icones/iconeTwitter.png';
import IconeInstagram from '../assets/icones/iconeInstagram1.png';
import IconeDiscord from '../assets/icones/iconeDiscord.png';

function Contato() {
    return ( 
        <main>
            <section className="homeOutlet">
                <div className="texto">
                    <h1>Dúvidas e suporte, entre em contato:</h1>
                    <div className='icones'>
                        <img src={IconeTwitter} alt="Icone Twitter" />
                        <img src={IconeInstagram} alt="Icone Instagram" />
                        <img src={IconeDiscord} alt="Icone Discord" />
                    </div>
                </div>
                <div className='line'></div>
                <div className="formulario">
                    <div className='formularioUnico1'>
                      <h3>Nome:</h3>
                      <input className='input' type="text" />
                    </div>
                        <div className='formularioUnico1'>
                     <h3>E-mail:</h3>
                    <input className='input' type="text" />
                    </div>
                    <div className='formularioUnico2'>
                       <h3>Mensagem:</h3>
                      <input className='input' type="text" />
                    </div>
                    <button type="button" className="ContactButton">Começar agora</button>
                </div>
            </section>
        </main>
     );
}

export default Contato;