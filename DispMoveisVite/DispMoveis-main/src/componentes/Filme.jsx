// Filme.jsx

import { useState } from "react"

export default function Filme({ data, meRemova }) {
    const [isFavorite, setIsFavorite] = useState(false);
    

    function favoritar(){
        if ( isFavorite ) {
            setIsFavorite(false);
        } else {
            setIsFavorite(true);
        }
    }

    function remover(){
        meRemova(data.id);
    }

    return(
        <div className={'filme ' + (isFavorite ? 'fav' : '')}>
            <div className="poster">
                <img src={data.image?.medium} />
            </div>
            <div className="conteudo">
                <h3>{data.name}</h3>
                <span className="generos">{data.genres.join(" | ")}</span>
                {/* Inserir de maneira "perigosa" uma forma de ler o html sem as tags */}
                <div className="sinopse" dangerouslySetInnerHTML={{ __html: data.summary}}></div>
                <div className="botoes">
                    <button onClick={favoritar}>❤️</button>
                    <button onClick={remover}>🗑️</button>
                </div>
            </div>

        </div>
    )
    
}