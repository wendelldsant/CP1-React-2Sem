function Cards({conteudo}) {
    return ( 
    <>
        {
            conteudo.map((prop, index)=>(
                <div class="box" style={{backgroundColor: `${prop.color}`}}>
                    <h1>{prop.numero}</h1>
                    <h2>{prop.rede}</h2>
                    <p>{prop.texto}</p>
                </div>
            ))
        }
    </> );
}

export default Cards;