import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Geyson from "../../pages/Geyson";
import Title from "../../pages/Geyson/title";
const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/Geyson" element={<Geyson />} />
                    <Route path="/title" element={<Title />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;

