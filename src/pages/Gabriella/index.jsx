import React, { useState } from 'react';
import Title from './Title';
import SearchBar from './Search';
import CatalogoContatos from './Container';

const contatosIniciais = [
  { nome: 'Ana Clara', numero: '11 91234-5678', instagram: 'ana_clara' },
  { nome: 'Bruno Lima', numero: '21 99876-5432', instagram: 'bruno.lima' },
  { nome: 'Carlos Eduardo', numero: '31 92345-6789', instagram: 'carlos_edu' },
  { nome: 'Daniela Souza', numero: '41 93456-7890', instagram: 'danisouza' },
  { nome: 'Eduardo Silva', numero: '51 94567-8901', instagram: 'edu_silva' }
];

export default function AgendaPage() {
  const [pesquisa, setPesquisa] = useState('');

  const contatosFiltrados = contatosIniciais.filter((contato) =>
    contato.nome.toLowerCase().startsWith(pesquisa.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <Title />
      <SearchBar pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <CatalogoContatos contatos={contatosFiltrados} />
    </div>
  );
}
