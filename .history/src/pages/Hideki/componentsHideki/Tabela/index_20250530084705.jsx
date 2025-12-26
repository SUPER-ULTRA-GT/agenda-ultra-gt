import Contatinhos from "../Contatinhos";

const Tabela = ({ esquemas }) => {
    return ( 
        <div className="py-12">
            <Contatinhos 
            esquemas={esquemas}
            onDelete={(id) }
            />
        </div>
     );
}
 
export default Tabela;