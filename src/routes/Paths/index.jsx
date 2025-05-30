import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Matheus from "../../pages/Matheus"
import Vendel from "../../pages/Vendel";
import Fablilson from "../../pages/fablilson";
import Barradepesquisa from "../../pages/Willame/componentsWillame/Barradepesquisa";
import Willame from "../../pages/Willame";
import Jnascim from "../../pages/Jnascim";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
          <Routes>
                    <Route path="/" element={<SiteLayout />}>
                        <Route path="/hideki" element={<Hideki />} />
                         <Route path="/matheus" element={<Matheus />}/>
                        <Route path="/matheus" element={<Matheus />}/>
                        <Route path="/vendel" element={<Vendel />}> </Route>
                        <Route path="/fablilson" element={<Fablilson />} />
                        <Route path="/Willame/pesquisa" element={< Barradepesquisa/>} />
                        <Route path="/Willame" element={< Willame/>} />
                        <Route path="/Jnascim" element={<Jnascim/>} />


                    </Route>
                </Routes>
        </BrowserRouter>
        </>
    )
}
export default Paths;

