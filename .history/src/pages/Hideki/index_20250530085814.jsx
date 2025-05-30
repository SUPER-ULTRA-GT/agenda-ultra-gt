import { useState } from "react";
import listaDeContatinhos from '/src/pages/Hideki/listaDeContatinhos.json';
import Container from "./componentsHideki/Container";
import Tabela from "./componentsHideki/Tabela";
import Titulo from "./componentsHideki/Titulo";
import Modal from "./componentsHideki/Modal";

const Hideki = () => {
    const [contatinhos, setContatinhos] = useState(listaDeContatinhos);

    const filtrarContatinhos = (evento) => {
        const contatinhosFiltrados = [...contatinhos];
        setContatinhos(contatinhosFiltrados.filter(contatinho => contatinho.nome.toLowerCase().includes(evento)));
    }

    return (
        <Container>
            <Titulo onChange={(evento) => filtrarContatinhos(evento)} />
            <Tabela
                esquemas={contatinhos}
                onDelete={deletarContatinho}
                onEdit={abrirModal}
            />
            <Modal
                isOpen={modalAberto}
                
        </Container>
    );
}

export default Hideki;