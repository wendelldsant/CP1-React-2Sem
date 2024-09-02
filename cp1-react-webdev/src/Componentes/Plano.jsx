import React from 'react';

function Plano({ fundo, corBotao, borda, titulo, inputs, textoBotao, img }) {
    return ( 
        <div className='plano'>
            <div>
            <h3 style={{backgroundColor: fundo}}>{titulo}</h3>
            <div className="planosInfos">
                {inputs.map(plano => (
                    <div key={plano.title} className="infosTexto">
                        <p>{plano.label}</p>
                        <div className='botaozao'>
                            <h4>{plano.input}<span className='bold'> {plano.span}</span></h4>
                            <p>˅</p>
                        </div>
                    </div>
                ))
                }
            </div> 
            </div>
                {img ? <img className="imagemPlano" src={img} alt="" /> : false}
                <button style={{backgroundColor: fundo, color: corBotao, border: borda == false ? 'none' : '2px solid #EBE9E9' }} className="planoBotao">
                    {textoBotao}
                </button>
        </div>
     );
}

export default Plano;