import Catalogo from "./components/Catalogo";
import Search from "./components/Search";
import Title from "./components/Title";

const Clive = () => {
    return ( 
        <div className="flex flex-col mx-20">
            <Title/>
            <Search/>
            <Catalogo/>
        </div>
     );
}
 
export default Clive;