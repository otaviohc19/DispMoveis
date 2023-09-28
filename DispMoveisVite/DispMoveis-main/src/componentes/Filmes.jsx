import { useEffect, useState } from "react"
import Filme from "./Filme";

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        // Caso a busca esteja vazia, não busca na API
        if ( busca.length < 3) {
            setFilmes([]);
            return;
        }

        const url = "https://api.tvmaze.com/search/shows?q=" + busca;

        fetch(url)
            .then(resultados => resultados.json())
            .then(resultados => setFilmes(resultados))
            .catch(err => console.error(err));
    }, [busca]); 

    function removeFilme(filmeId) {
        // let novosFilmes = [];
        // for (let filme of filmes) {
        //     if (filme.show.id != filmeId) {
        //         novosFilmes.push(filme);
        //     }
        // }
        // setFilmes(novosFilmes);
    
        let novosFilmes = filmes.filter(filme => filme.show.id != filmeId);
        setFilmes(novosFilmes);
    }

    return(
        <div>
            <h1>Filmes</h1>
            
            <div className="busca">
                <input 
                    type="text" 
                    placeholder="Buscar Série..." 
                    value={busca}
                    onChange={ev => setBusca(ev.target.value)}
                />
            </div>

            {filmes.map((filme) => {
                return (
                    <Filme data={filme.show}
                    key={'filme_'+filme.show.id}
                    meRemova={removeFilme}
                    />
                )
            })}
        </div>
    )
}