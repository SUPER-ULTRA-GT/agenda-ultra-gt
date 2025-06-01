export default function CardGabi({ nome , numero , instagram}) {
  return (
    
    <div className=" bg-blue-50 p-4 rounded shadow">
      <p className="font-medium">{nome}</p>
      <p className="text-sm text-gray-700">📞 {numero}</p>
      <p className="text-sm text-blue-600">📸 @{instagram}</p>
    </div>
  );
}
