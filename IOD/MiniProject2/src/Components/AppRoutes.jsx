import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Community from "./Community";
import Programs from "./Programs";
import OnlineCoaching from "./OnlineCoaching";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

function AppRoutes ()
{
    return (
        <>
            <Routes>
                <Route path= "/" element={<Home></Home>}></Route>
                <Route path= "/Community" element={<Community></Community>}></Route>
                <Route path= "/Programs" element={<Programs></Programs>}></Route>
                <Route path= "/OnlineCoaching" element={<OnlineCoaching></OnlineCoaching>}></Route>
                <Route path= "/Login" element={<Login></Login>}></Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;