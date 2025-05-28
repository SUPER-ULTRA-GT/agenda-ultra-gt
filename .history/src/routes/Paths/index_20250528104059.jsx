import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Victor from "../../pages/Victor";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/victor" element={<Victor />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;

sfc