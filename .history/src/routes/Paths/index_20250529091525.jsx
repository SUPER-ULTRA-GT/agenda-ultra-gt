import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Fablilson from "../../pages/fablilson";
import Vendel from "../../pages/Vendel";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/fablilson" element={<Fablilson />} />
                     <Route path="/matheus" element={<Matheus />}/>
                    <Route path="/vendel" element={<Vendel />}> </Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;