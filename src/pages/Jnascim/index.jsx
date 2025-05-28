import BarraDePesquisa from "./components/BarraDePesquisa";
import Catalogo from "./components/Catalogo";
import Title from "./components/Title";

const Jnascim = () => {
    return (
        <div className="flex flex-col mx-20"> 
        <Title/>
        <BarraDePesquisa/>
        <Catalogo/>

        </div>
      );
}
 
export default Jnascim;