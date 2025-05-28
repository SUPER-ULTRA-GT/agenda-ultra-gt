import { useState } from "react";

const Formulario = ({ adicionarItem }) => {
    const [novoItem, setNovoItem] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (novoItem.trim() === '') return;

        adicionarItem(novoItem);
        setNovoItem(' ');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
            type="text"
            value={novoItem}
            onChange={(e) => setNovoItem(e.target.value)}
            placeholder="Novo compromisso..."
            className="boder p-2 rounded mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Adicionar</button>
        </form>
    );
};

export default Formulario;