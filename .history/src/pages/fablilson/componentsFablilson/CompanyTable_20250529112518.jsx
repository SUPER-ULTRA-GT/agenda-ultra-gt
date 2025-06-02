export default function ResponsavelTable() {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Nome</th>
            <th className="border px-4 py-2 text-left">Data</th>
            <th className="border px-4 py-2 text-left">Responsável</th>
            <th className="border px-4 py-2 text-left">Assunto</th>
            <th className="border px-4 py-2 text-left">Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
