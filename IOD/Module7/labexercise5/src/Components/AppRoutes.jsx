import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import BitcoinRates from "./BitcoinRates";
import PageNotFound from "./PageNotFound";

function AppRoutes ()
{
    return (
        <>
            <Routes>
                <Route path = "/" element = {<HomePage></HomePage>}></Route>
                <Route path = "/Login" element = {<Login></Login>}></Route>
                <Route path = "/BitcoinRates" element = {<BitcoinRates></BitcoinRates>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;