import {Header} from "./Header.jsx";
import {Outlet} from "react-router";
import {Footer} from "./Footer.jsx";

export function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}