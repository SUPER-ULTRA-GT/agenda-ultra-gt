import iconeLixo from '/src/pages/Hideki/assetsHideki/lixo(1).png'
import iconeEditar from '/src/pages/Hideki/assetsHideki/editar-texto(1).png'

const Contatinhos = ({ esquemas, onDelete, onEdit }) => {
    return (
        <ul className='flex flex-col gap-8'>
            {esquemas.map(esquema => (
                <li key={esquema.id} className='flex border-b-2 border-b-red-800 border-solid pb-4'>
                    <div className='flex flex-col gap-2'>
                        <p><span className='font-bold text-red-950'>Contatinho:</span> {esquema.nome}</p>
                        <p><span className='font-bold text-red-950'>Instagram:</span> {esquema.instagram}</p>
                    </div>
                    <div>
                        <img
                            src={iconeLixo}
                            alt="Icone de um lixo para deletar"
                            onClick={() => onDelete(esquema.id)}
                        />
                        <img
                            src={iconeEditar}
                            alt="Icone de um lapis para editar"
                            onClick={() => onEdit(esquema.id)}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Contatinhos;