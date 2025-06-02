import { useState } from 'react';

const BarradePesquisa = () => {
  // "Tabela" de pessoas com nome e status
  const pessoas = [
    { nome: 'Gabriel', status: 'enviado' },
    { nome: 'Pedro', status: 'pendente' },
    { nome: 'Ana', status: 'enviado' },
    { nome: 'Wilton', status: 'pendente' },
    
  ];

  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = () => {
    // Filtra os objetos com base no nome
    const filtrados = pessoas.filter((pessoa) =>
      pessoa.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setResultados(filtrados);
  };

  return (
    <div className="p-4">
      <input
        className="px-1.5 placeholder-white border-2 border-solid border-b rounded-2xl"
        type="text"
        placeholder="Digite um nome"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <button
        className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={handleSearch}
      >
        Buscar
      </button>

      {/* Mostrar os resultados */}
      <ul className="mt-4 text-white">
        {resultados.length > 0 ? (
          resultados.map((pessoa, index) => (
            <li key={index}>
              {pessoa.nome} - <span className="font-semibold">{pessoa.status}</span>
            </li>
          ))
        ) : (
          <li>Nenhum resultado encontrado</li>
        )}
      </ul>
    </div>
  );
};

export default BarradePesquisa;
