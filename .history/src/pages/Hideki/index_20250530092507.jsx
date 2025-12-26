import { useState } from "react";
import listaDeContatinhos from '/src/pages/Hideki/listaDeContatinhos.json';
import Container from "./componentsHideki/Container";
import Tabela from "./componentsHideki/Tabela";
import Titulo from "./componentsHideki/Titulo";
import Modal from "./componentsHideki/Modal";

const Hideki = () => {
    const [contatinhos, setContatinhos] = useState(listaDeContatinhos);
    const [modalAberto, setModalAberto] = useState(false);
    const [contatinhoAtual, setContatinhoAtual] = useState({
        id: null,
        nome: '',
        instagram: ''
    })

    const filtrarContatinhos = (evento) => {
        setContatinhos(listaDeContatinhos.filter(contatinho => contatinho.nome.toLowerCase().includes(evento)));
    };

    const deletarContatinho = (id) => {
        setContatinhos(contatinhos.filter(contatinho => contatinho.id !== id));
    };

    const abrirModal = (id = null) => {
        const contatinho = id ? contatinho.find(contatinho => contatinho.id === id) : {id: null, nome: '', instagram: ''};
        setContatinhoAtual(contatinho);
        setModalAberto(true);
    };
    const fecharModal = () => {
        setModalAberto(false);
        setContatinhoAtual({ id: null, nome: '', instagram: ''})
    };

    const salvarContatinho = (evento) => {
        evento.preventDefault();
    }


    return (
        <Container>
            <Titulo onChange={(evento) => filtrarContatinhos(evento)} />
            <Tabela
                esquemas={contatinhos}
                onDelete={ }
                onEdit={abrirModal}
            />
            <Modal
                isOpen={modalAberto}
                onClose={fecharModal}
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
                                value={ }
                                onChange={ }
                                className="w-full p-2 border border-red-300 rounded outline-none focus:border-red-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="instagram"
                                className="block mb-2
                            ">
                                Instagram:
                            </label>
                            <input
                                type="text"
                                name="instagram"
                                value={ }
                                onChange={ }
                                className="w-full p-2 border border-red-300 rounded outline-none focus:border-red-500"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                className="px-4 py-2 border border-red-800 rounded hover:bg-red-50"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-green-700 py-2 px-4 rounded hover:bg-green-900"
                            >
                                
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </Container>
    );
}

export default Hideki;