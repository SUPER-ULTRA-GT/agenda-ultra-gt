
import contatos from '../assetsgabi/contatos.png';

const Title = ({ titulo }) => {
    return ( 
         <header className="w-screen fixed top-0 left-0 z-50 bg-gradient-to-r from-blue-200 to-blue-100 py-2 px-6 shadow-md">
            <div className="flex items-center">
                {/* Imagem */}
                <img 
                    src={contatos} 
                    alt="Logo da página" 
                    className="w-16 h-16 rounded-full object-cover"
                />

                {/* Título */}
                <h1 className="ml-4 text-2xl font-extrabold text-gray-800">
                    Contatinhos ... {titulo}
                </h1>
            </div>
        </header>
     );
}
 
export default Title;