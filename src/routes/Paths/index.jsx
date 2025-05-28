import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Clive from "../../pages/Clive";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/clive" element={<Clive />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;