import logo from '/src/pages/Hideki/assetsHideki/logo.png'
import BarraDePesquisa from '../BarraDePesquisa';

const Titulo = () => {
    return ( 
        <div className='flex justify-between items-center'>
        <div className='flex items-center gap-8'>
        <img src={logo} alt='Logo da pagina' className='w-24 rounded-full'/>
        <h1 className='text-3xl font-bold'>Agenda de contatinhos 😈</h1>
        </div>
        <BarraDePesquisa onChange={}/>
        </div>
     );
}
 
export default Titulo;