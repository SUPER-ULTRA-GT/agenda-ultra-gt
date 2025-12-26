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
                onDelete={ }
                onEdit={ }
            />
            <Modal
                isOpen={ }
                onClose={ }
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">

                    </h2>
                    <form onSubmit={ } className="flex flex-col gap-4">
                        <div>
                            <label
                                htmlFor="nome"
                                className="block mb-2
                            ">
                                Nome:
                            </label>
                            <input
                                type="text"
                                name="nome"
                                value
                            />
                        </div>
                    </form>
                </div>
            </Modal>
        </Container>
    );
}

export default Hideki;