import esquemas from '/src/pages/Hideki/listaDeContatinhos.json'

const Contatinhos = () => {
    return ( 
        <ul className='flex flex-col gap-12'>
            {esquemas.map(esquema => (
                <li key={esquema.id} className='flex flex-col gap-2 border-b-2 border-b-red-800'>
                    <p><span className='font-bold text-red-950'>Contatinho:</span> {esquema.nome}</p>
                    <p><span className='font-bold text-red-950'>Instagram:</span> {esquema.instagram}</p>
                </li>
            ))}
        </ul>
     );
}
 
export default Contatinhos;