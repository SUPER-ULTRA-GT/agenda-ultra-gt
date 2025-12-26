import { useState } from "react";
import listaDeContatinhos from '/src/pages/Hideki/listaDeContatinhos.json';
import Container from "./componentsHideki/Container";
import Tabela from "./componentsHideki/Tabela";
import Titulo from "./componentsHideki/Titulo";

const Hideki = () => {
    const [contatinhos, setContatinhos] = useState(listaDeContatinhos);
    const [nome, setNome] = useState('');
    const filtrarContatinhos = (evento) => {
        const contatinhosFiltrados = [...contatinhos];
            return setContatinhos(contatinhosFiltrados.filter(contatinho => contatinho.nome.toLowerCase().includes(evento)));
    }

    const handleOnChange = (evento) => {
       setNome(evento.target.value)
       console.log(nome)
    }

    return (
        <Container>
            <Titulo onChange={(evento) => filtrarContatinhos(evento)} />
            <Tabela esquemas={contatinhos} />
        </Container>
    );
}

export default Hideki;