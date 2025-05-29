import React, { useState } from 'react';

const AgendaTelefonica = () => {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarContato = (e) => {
    e.preventDefault();
    if (!nome || !telefone) return;

    setContatos([...contatos, { nome, telefone }]);
    setNome('');
    setTelefone('');
  };

  const removerContato = (index) => {
    const novaLista = contatos.filter((_, i) => i !== index);
    setContatos(novaLista);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📞 Agenda Telefônica</h2>

      <form onSubmit={adicionarContato}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            {contato.nome} - {contato.telefone}
            <button onClick={() => removerContato(index)} style={{ marginLeft: '10px' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgendaTelefonica;
