import esquemas from '/src/pages/Hideki/listaDeContatinhos.json'

const Contatinhos = () => {
    return ( 
        <ul>
            {esquemas.map(esquema => (
                <li key={esquema.id}>
                    Contatinho: {esquema.nome}
                    
                </li>
            ))}
        </ul>
     );
}
 
export default Contatinhos;