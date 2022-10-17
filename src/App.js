import Garagem from "./Componentes/Garagem";
import { GlobalStyled } from "./globalStyled";
import {useState} from 'react'

export default function App() {
  const nome = "Turma";
  const [nomeEstado, setNomeEstado] = useState("Lucas Calabria")
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  const mudarNome = () => {
    setNomeEstado("React Learner!")
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nomeEstado} mensagemAprentacao={mudarNome} />
    </div>
  );
}
