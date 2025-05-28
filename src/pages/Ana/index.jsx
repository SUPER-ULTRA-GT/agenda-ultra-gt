import { useState } from "react";
import Agenda from "./componentsAna/Agenda";
import Container from "./componentsAna/Container"
import Title from "./componentsAna/Title";
import BarraDePesquisa from "./componentsAna/BarraDePesquisa";
import Formulario from "./Formulario";

constAna  = () => {
    const [itens, setItens] = useState([
        { id: 1, nome: 'Reunião de equipe', concluido: false },
        { id: 2, nome: 'Revisar código', concluido: true },
    ]);

    const adicionarItem = (nome) => {
        const novoItem = {
            id: Date.now(), // cria um id único
            nome,
            concluido: false,
        };
        setItens([...itens, novoItem]);
    };

    const toggleConcluido = (id) => {
        setItens(itens.map(item =>
            item.id === id ? { ...item, concluido: !item.concluido } :item
        ));
    };

    return (
        <Container>
            <Title />
            <BarraDePesquisa />
            <Formulario />
            <Agenda itens={itens} toggleConcluido={toggleConcluido}/>
        </Container>
    );
};
 
export default Ana;