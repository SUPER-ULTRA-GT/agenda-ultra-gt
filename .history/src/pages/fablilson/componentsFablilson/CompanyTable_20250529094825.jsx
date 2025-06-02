import React from "react";

const companies = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Francisco Chang",
    country: "Mexico",
  },
];

export default function CompanyTable() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Lista de Empresas</h2>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Company</th>
            <th className="border px-4 py-2 text-left">Contact</th>
            <th className="border px-4 py-2 text-left">Country</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.company}</td>
              <td className="border px-4 py-2">{item.contact}</td>
              <td className="border px-4 py-2">{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
