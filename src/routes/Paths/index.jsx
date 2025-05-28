import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Barradepesquisa from "../../pages/Willame/componentsWillame/Barradepesquisa";
import Willame from "../../pages/Willame";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/Willame/pesquisa" element={< Barradepesquisa/>} />
                    <Route path="/Willame" element={< Willame/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;

