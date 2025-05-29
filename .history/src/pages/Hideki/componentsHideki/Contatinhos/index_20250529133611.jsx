import esquemas from '/src/pages/Hideki/listaDeContatinhos.json'

const Contatinhos = () => {
    return ( 
        <ul className='flex flex-col gap-12'>
            {esquemas.map(esquema => (
                <li key={esquema.id} className='flex flex-col gap-2'>
                    <p><span></span>Contatinho: {esquema.nome}</p>
                    <p>Instagram: {esquema.instagram}</p>
                </li>
            ))}
        </ul>
     );
}
 
export default Contatinhos;