import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ODS from "./components/pages/ODS";
import Sobre from "./components/pages/Sobre";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home /> }></Route>
                <Route path="/ODS" element={<ODS /> }></Route>
                <Route path="/Sobre" element={<Sobre /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes