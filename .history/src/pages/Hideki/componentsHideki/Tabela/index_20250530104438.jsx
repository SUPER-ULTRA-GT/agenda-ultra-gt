import Contatinhos from "../Contatinhos";

const Tabela = ({ esquemas, onDelete, onEdit }) => {
    return (
            <Contatinhos
                esquemas={esquemas}
                onDelete={(id) => onDelete(id)}
                onEdit={(id) => onEdit(id)}
            />
    );
}

export default Tabela;