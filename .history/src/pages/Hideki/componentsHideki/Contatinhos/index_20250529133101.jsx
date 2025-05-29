import esquemas from '/src/pages/Hideki/listaDeContatinhos.json'

const Contatinhos = () => {
    return ( 
        <ul>
            {esquemas.map(esquema => (
                <li key={esquema.id}
            ))}
        </ul>
     );
}
 
export default Contatinhos;