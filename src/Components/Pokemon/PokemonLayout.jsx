import {Header} from "../Header.jsx";
import {Outlet, useNavigate} from "react-router";
import {Footer} from "../Footer.jsx";

export function PokemonLayout() {
    const navigate = useNavigate();

    function handleInput(event) {
        if (event.key !== "Enter") return;
        navigate(event.target.value);
        event.target.value = "";
    }

    return (
        <>
            <Header/>
            <main>
                <Outlet context={handleInput}/>
            </main>
            <Footer/>
        </>
    )
}