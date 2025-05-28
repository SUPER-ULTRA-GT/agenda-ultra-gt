import { useState } from 'react';

const BarraDePesquisa = () => {
    const [busca, setBusca] = useState(' ');

    const handleChange = (e) => {
        setBusca(e.target.value);
        console.log('Buscando por:', e.target.value);
    };

    return (
        <input
        type="text"
        placeholder="Pesquisar..."
        value={busca}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
        />
    );
};

export default BarraDePesquisa;