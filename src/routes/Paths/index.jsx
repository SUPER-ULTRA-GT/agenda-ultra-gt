import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Matheus from "../../pages/Matheus"
import Vendel from "../../pages/Vendel";
import Gabi from "../../pages/Gabriella";
import Gabriella from "../../pages/Gabriella";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/matheus" element={<Matheus />}/>
                    <Route path="/vendel" element={<Vendel />}> </Route>
                    <Route path="/Gabriella" element={<Gabriella/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;
