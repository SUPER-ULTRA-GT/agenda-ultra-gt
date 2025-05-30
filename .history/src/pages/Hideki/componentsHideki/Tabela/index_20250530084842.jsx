import Contatinhos from "../Contatinhos";

const Tabela = ({ esquemas, onDelete, on }) => {
    return ( 
        <div className="py-12">
            <Contatinhos 
            esquemas={esquemas}
            onDelete={(id) => onDelete(id)}
            onEdit={(id) => onEdit(id)}
            />
        </div>
     );
}
 
export default Tabela;