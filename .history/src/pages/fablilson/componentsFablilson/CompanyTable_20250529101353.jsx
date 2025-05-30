import React from "react";

const companies = [
  {
    data: "2023-10-01",
    titulo: "Rio Mar",
    contact: "Willime",
    country: "Bagdá",
  },
  {
    respo: "Iguatemi",
    contact: "Gabriel",
    country: "Pirambu",
  },
];

// Função para formatar a data em "dd/mm/yyyy"
function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

export default function tituloTable() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Lista de Empresas</h2>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Data</th>
            <th className="border px-4 py-2 text-left">titulo</th>
            <th className="border px-4 py-2 text-left">Contact</th>
            <th className="border px-4 py-2 text-left">Country</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{formatDate(item.data)}</td>
              <td className="border px-4 py-2">{item.titulo}</td>
              <td className="border px-4 py-2">{item.contact}</td>
              <td className="border px-4 py-2">{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
