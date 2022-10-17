import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import {useState} from 'react'

function Garagem(props) {

  const [automovel, setAutomovel] = useState ({
    cor: "Violeta",
    ano: 2030,
    flex: "ye"
  })

  const [automovel2, setAutomovel2] = useState ({
    cor: "Laranja",
    ano: 2002,
    flex: "nop"
  })

  const [automovel3, setAutomovel3] = useState ({
    cor: "Marrom",
    ano: 1987,
    flex: "Quase"
  })

  const [automovel4, setAutomovel4] = useState ({
    cor: "Bege",
    ano: 2022,
    flex: "siuu"
  })

  const trocaCarro = () => {
    setAutomovel({cor: "UltraVioleta", ano: 2025, flex: "Logic"})
    setAutomovel2({cor: "Vinho", ano: 2000, flex: "Try again"})
    setAutomovel3({cor: "Aqua", ano: 1990, flex: "Jamais"})
    setAutomovel4({cor: "Preto Fosco", ano: 2022, flex: "Agora sim!"})
  };

  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem do {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <Carro
        adicionadoPor= {props.nome}
        cor= {automovel.cor}
        ano= {automovel.ano}
        flex= {automovel.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex}
      />
      <Carro adicionadoPor={props.nome} 
        cor={automovel4.cor} 
        ano={automovel4.ano} 
        flex={automovel4.flex} />

        <Button onClick={trocaCarro} >Mudar Nomes</Button>
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
