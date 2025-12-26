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
        const contatinho = id ? contatinhos.find(contatinho => contatinho.id === id) : {id: null, nome: '', instagram: ''};
        setContatinhoAtual(contatinho);
        setModalAberto(true);
    };
    const fecharModal = () => {
        setModalAberto(false);
        setContatinhoAtual({ id: null, nome: '', instagram: ''})
    };

    const salvarContatinho = (evento) => {
        evento.preventDefault();

        if (contatinhoAtual.id) {
            setContatinhos(contatinhos.map(contatinho => contatinho.id === contatinhoAtual.id ? contatinhoAtual : contatinho))
        } else {
            setContatinhoAtual([...contatinhos, {
                ...contatinhoAtual,
                id: Math.max(...contatinhos.map(contatinho => contatinho.id)) + 1
            }])
        }

        fecharModal()
    }

    const handleChange =(evento) => {
        const { name, value } = evento.target;
        setContatinhoAtual(prev => ({
            ...prev,
            [name]: value
        }));
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
                onClose={fecharModal}
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">

                    </h2>
                    <form onSubmit={salvarContatinho} className="flex flex-col gap-4">
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
                                value={contatinhoAtual.nome}
                                onChange={handleChange}
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
                                value={contatinhoAtual.instagram}
                                onChange={handleChange}
                                className="w-full p-2 border border-red-300 rounded outline-none focus:border-red-500"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                className="px-4 py-2 border border-red-800 rounded hover:bg-red-50"
                                onClick={fecharModal}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-green-700 py-2 px-4 rounded hover:bg-green-900"
                            >
                                {contatinhoAtual.id ? 'Salvar' : 'Adicionar'}
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </Container>
    );
}

export default Hideki;