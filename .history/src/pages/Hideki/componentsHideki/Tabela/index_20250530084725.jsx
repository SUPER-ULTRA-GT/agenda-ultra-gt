import Contatinhos from "../Contatinhos";

const Tabela = ({ esquemas }) => {
    return ( 
        <div className="py-12">
            <Contatinhos 
            esquemas={esquemas}
            onDelete={(id) => onDelete(id)}
            onEdit={}
            />
        </div>
     );
}
 
export default Tabela;