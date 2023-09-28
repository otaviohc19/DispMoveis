import { useEffect, useState } from "react";

export default function Contador({ inicial }) {
    let numero = inicial;
    const[cont, setCont] = useState(inicial);
    const [dobro, setDobro] = useState(inicial*2);
    
    // Efeito colateral
    useEffect(() => {
        setDobro(cont*2);
    }, [cont]);

    // Execute APENAS UMA VEZ, na criação do componente
    useEffect(() => {
        console.log("Inicializou o componente");
    }, [])

    console.log("Renderizou o componente");

    function aumentar() {
        numero++;
        setCont(cont + 1);
        console.log("Aumentou:", numero);
    }

    function diminuir () {
        numero--;
        setCont(cont - 1);
        console.log("Diminuiu:", numero);
    }

    return (
        <div>
            Valor: {numero} <br />
            Contador: {cont} <br />
            Dobro: {dobro} <br />
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}