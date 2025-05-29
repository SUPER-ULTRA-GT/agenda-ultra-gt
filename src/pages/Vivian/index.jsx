import { useState } from 'react';
import Catalogo from "./componentsVivian/Catalogo";
import Search from "./componentsVivian/Search";
import Title from "./componentsVivian/Title";

const Vivian = () => {
  const [busca, setBusca] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contatos, setContatos] = useState([]);

  const adicionarContato = () => {
    if (nome !== '' && email !== '') {
      const novoContato = { nome, email };
      setContatos([...contatos, novoContato]);
      setNome('');
      setEmail('');
    }
  };

  const removerContato = (index) => {
    const novaLista = [...contatos];
    novaLista.splice(index, 1);
    setContatos(novaLista);
  };

  const contatosFiltrados = contatos.filter(
    (contato) =>
      contato.nome.toLowerCase().includes(busca.toLowerCase()) ||
      contato.email.toLowerCase().includes(busca.toLowerCase())
  );

  return ( 
    <div className="flex flex-col mx-20">
      <Title />
      <Search setBusca={setBusca} />

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={adicionarContato}
          className="bg-pink-400 text-white p-2 rounded"
        >
          Adicionar
        </button>
      </div>

      <Catalogo contatos={contatosFiltrados} removerContato={removerContato} />
    </div>
  );
};

export default Vivian;
