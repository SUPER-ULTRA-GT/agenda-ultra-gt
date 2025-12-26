import Contatinhos from "../Contatinhos";

const Tabela = ({ esquemas }) => {
    return ( 
        <div className="py-12">
            <Contatinhos 
            esquemas={esquemas}
            onDelete={}
            />
        </div>
     );
}
 
export default Tabela;