import { useState } from 'react';

const BarradePesquisa = () => {
  // Lista de nomes (simulando uma "tabela")
  const nomes = ['Gabriel','Wiilliam', Pedro];

  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = () => {
    // Filtra os nomes que incluem o texto digitado
    const filtrados = nomes.filter((nome) =>
      nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setResultados(filtrados);
  };

  return (
    <div className="p-4">
      <input
        className="px-1.5 placeholder-white border-2 border-solid border-white rounded-2xl"
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
          resultados.map((nome, index) => <li key={index}>{nome}</li>)
        ) : (
          <li>Nenhum resultado encontrado</li>
        )}
      </ul>
    </div>
  );
};

export default BarradePesquisa;
