const Card = ({nome, email, onRemover}) => {
    return ( 
        <div className="bg-purple-300 rounded my-1.5 flex w-full">
             <div>
        <p className="font-semibold">{nome}</p>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
      <button onClick={onRemover} className="text-red-500 text-sm">
        Remover
      </button>
        </div>
     );
}
 
export default Card;