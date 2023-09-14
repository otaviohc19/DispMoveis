import { useEffect, useState } from "react"

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const url = "https://api.tvmaze.com/search/shows?q=naruto";

        fetch(url)
            .then(resultados => resultados.json())
            .then(resultados => setFilmes(resultados))
            .catch(err => console.error(err));
    }, []);

    return(
        <div>
            <h1>Filmes</h1>
            
            {filmes.map((filme) => {
                return (
                    <div key={'filme_'+filme.show.id}>
                        <h3>{filme.show.name}</h3>
                        <img src={filme.show.image.medium} />
                    </div>
                )
            })}
        </div>
    )
}