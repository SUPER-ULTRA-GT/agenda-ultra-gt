import { useState } from "react";
import listaDeContatinhos from '/src/pages/Hideki/listaDeContatinhos.json';
import Container from "./componentsHideki/Container";
import Tabela from "./componentsHideki/Tabela";
import Titulo from "./componentsHideki/Titulo";

const Hideki = () => {
    const [contatinhos, setContatinhos] = useState(listaDeContatinhos);
    const [nome, setNome] = useState('');
    const filtrarContatinhos = (evento) => {
        nome === '' ? setContatinhos(contatinhosFiltrados)
        const contatinhosFiltrados = [...contatinhos];
            return setContatinhos(contatinhosFiltrados.filter(contatinho => contatinho.nome.toLowerCase().includes(evento)));
    }

    const handleOnChange = (evento) => {
       setNome(evento)
    }

    return (
        <Container>
            <Titulo onChange={(evento) =>handleOnChange(evento)} />
            <Tabela esquemas={contatinhos} />
        </Container>
    );
}

export default Hideki;