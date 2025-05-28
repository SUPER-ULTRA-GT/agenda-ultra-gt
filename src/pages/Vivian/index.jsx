import Catalogo from "./componentsVivian/Catalogo";
import Search from "./componentsVivian/Search";
import Title from "./componentsVivian/Title";

const Vivian = () => {
    return ( 
        <div className="flex flex-col mx-20">
            <Title/>
            <Search/>
            <Catalogo/>
        </div>
     );
}
 
export default Vivian;