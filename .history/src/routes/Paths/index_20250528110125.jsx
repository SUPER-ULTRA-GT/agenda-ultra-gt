import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                    <Route path="/" element={<div>404 Not Found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;

sfc