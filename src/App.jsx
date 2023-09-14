import Contador from "./componentes/Contador";
import Filmes from "./componentes/Filmes";
import Menu from "./componentes/menu";
import Rodape from "./componentes/rodape";


// Exportando o componente principal/padrão
export default function App() {

  return (
    <div>
      <Menu />

      <Filmes />

      <Rodape />
    </div>
  )
}