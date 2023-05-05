import { Carros, Lista, MeuCarro } from "../Carro/style";

export function Carro(props) {
    return (
      <Carros>
        <h2>Meu carro</h2>
        <MeuCarro>
          <Lista>Cor: {props.cor}</Lista>
          <Lista>Ano: {props.ano}</Lista>
          <Lista>Flex: {props.flex}</Lista>
          <Lista>Adicionado: {props.adicionadoPor}</Lista>
        </MeuCarro>
      </Carros>
    );
  }
  
