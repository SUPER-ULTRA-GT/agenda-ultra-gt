import logo from '/src/pages/Hideki/assetsHideki/logo.png'
import BarraDePesquisa from '../BarraDePesquisa';

const Titulo = () => {
    return ( 
        <>
        <div>
        <img src={logo} alt='Logo da pagina' className='w-'/>
        <h1>Agenda de contatinhos 😈</h1>
        </div>
        <BarraDePesquisa />
        </>
     );
}
 
export default Titulo;