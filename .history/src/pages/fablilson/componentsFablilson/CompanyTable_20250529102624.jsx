import React from "react";

const companies = [
  {
    data: "11",
    responsavel: "RH",
    assunto: "Demissão",
    status: "enviado",
  },
  {
    data: "2023-10-01",
    responsavel: "ADM",
    assunto: "contratado",
    status: "pendente",
  },
];

// Função para formatar a data em "dd/mm/yyyy"
function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

export default function responsavelTable() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Lista de Empresas</h2>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Data</th>
            <th className="border px-4 py-2 text-left">Responsável</th>
            <th className="border px-4 py-2 text-left">Assunto</th>
            <th className="border px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{formatDate(item.data)}</td>
              <td className="border px-4 py-2">{item.responsavel}</td>
              <td className="border px-4 py-2">{item. assunto}</td>
              <td className="border px-4 py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
