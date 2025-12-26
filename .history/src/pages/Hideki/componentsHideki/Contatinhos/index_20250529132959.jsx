import esquemas from '/src/pages/Hideki/listaDeContatinhos.json'

const Contatinhos = () => {
    return ( 
        <ul>
            {esquemas.map()}
        </ul>
     );
}
 
export default Contatinhos;