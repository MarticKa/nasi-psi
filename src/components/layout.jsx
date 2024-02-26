import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

const Layout = () => {
    return (
        <>
            <Navigation />
            <div className="page-content">
                <Outlet />
            </div>
        </>
        );
}

export default Layout;