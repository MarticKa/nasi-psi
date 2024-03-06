import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';
import ScrollToTop from "./scrollToTop";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = () => {
    const location = useLocation();
    const lastHash = useRef('');

    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }
        const anchorElement = document.getElementById(lastHash.current);
        if (lastHash.current && anchorElement?.getBoundingClientRect()) {
            setTimeout(() => {
                const yOffset = -70; 
                const y = anchorElement.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
                lastHash.current = '';
            }, 100);

        }
    }, [location]);

    return (
        <>
            <ScrollToTop/>
            <Navigation />
            <div className="page-content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;