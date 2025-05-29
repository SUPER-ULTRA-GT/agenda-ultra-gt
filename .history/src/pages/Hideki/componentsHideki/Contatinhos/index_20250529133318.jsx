import esquemas from '/src/pages/Hideki/listaDeContatinhos.json'

const Contatinhos = () => {
    return ( 
        <ul>
            {esquemas.map(esquema => (
                <li key={esquema.id}>
                    <p>Contatinho: {esquema.nome}
                    Instagram: {esquema.instagram}
                </li>
            ))}
        </ul>
     );
}
 
export default Contatinhos;