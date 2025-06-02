import React, { useState } from "react";
import { Trash2, Plus } from "lucide-react"; // ícones

const initialCompanies = [
  {
    nome: "Gabriel",
    data: "2001-09-11",
    responsavel: "RH",
    assunto: "Demissão",
    status: "enviado",
  },
  {
    nome: "Pedro",
    data: "2025-05-29",
    responsavel: "ADM",
    assunto: "Admissão",
    status: "pendente",
  },
  {
    nome: "Ana",
    data: "2025-04-15",
    responsavel: "SESMT",
    assunto: "Admissão",
    status: "enviado",
  },
  {
    nome: "Wilton",
    data: "2025-03-12",
    responsavel: "SESMT",
    assunto: "Admissão",
    status: "pendente",
  },
];

function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

export default function ResponsavelTable() {
  const [companies, setCompanies] = useState(initialCompanies);
  const [form, setForm] = useState({
    nome: "",
    data: "",
    responsavel: "",
    assunto: "",
    status: "pendente",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.nome || !form.data || !form.responsavel || !form.assunto) {
      alert("Preencha todos os campos!");
      return;
    }

    setCompanies([form, ...companies]);
    setForm({ nome: "", data: "", responsavel: "", assunto: "", status: "pendente" });
  };

  const handleDelete = (indexToDelete) => {
    const confirm = window.confirm("Tem certeza que deseja excluir?");
    if (!confirm) return;
    setCompanies(companies.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* Formulário de Adição */}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="text"
          name="responsavel"
          placeholder="Responsável"
          value={form.responsavel}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="text"
          name="assunto"
          placeholder="Assunto"
          value={form.assunto}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          <Plus size={18} className="mr-1" /> Adicionar
        </button>
      </div>

      {/* Tabela */}
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Nome</th>
            <th className="border px-4 py-2 text-left">Data</th>
            <th className="border px-4 py-2 text-left">Responsável</th>
            <th className="border px-4 py-2 text-left">Assunto</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.nome}</td>
              <td className="border px-4 py-2">{formatDate(item.data)}</td>
              <td className="border px-4 py-2">{item.responsavel}</td>
              <td className="border px-4 py-2">{item.assunto}</td>
              <td className="border px-4 py-2">{item.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
