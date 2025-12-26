import { useState } from "react";
import listaDeContatinhos from '/src/pages/Hideki/listaDeContatinhos.json';
import Container from "./componentsHideki/Container";
import Tabela from "./componentsHideki/Tabela";
import Titulo from "./componentsHideki/Titulo";

const Hideki = () => {
    const [contatinhos, setContatinhos] = useState(listaDeContatinhos);

    const filtrarContatinhos = (evento) => {
        const contatinhosFiltrados = [...contatinhos];
        if (evento.length >= 2) {
            console.log(evento.length)
            console.log(contatinhosFiltrados)
            return setContatinhos(contatinhosFiltrados.filter(contatinho => contatinho.nome.toLowerCase().includes(evento)));

        }
        if (evento.length === 1) {
            console.log(evento.length)

            return setContatinhos(contatinhosFiltrados)
        }
    }

    return (
        <Container>
            <Titulo onChange={(evento) => filtrarContatinhos(evento)} />
            <Tabela esquemas={contatinhos} />
        </Container>
    );
}

export default Hideki;