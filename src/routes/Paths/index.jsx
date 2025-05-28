import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../../SiteLayout";
import Hideki from "../../pages/Hideki";
import Jair from "../../pages/jair";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="/hideki" element={<Hideki />} />
                     <Route path="/jair" element={<Jair />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths;

sfc