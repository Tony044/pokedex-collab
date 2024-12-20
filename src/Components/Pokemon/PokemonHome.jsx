import {SearchBar} from "../SearchBar.jsx";
import {useOutletContext} from "react-router";

export function PokemonHome() {
    const handleInput = useOutletContext()

    return (
        <>
            <p>Bienvenue</p>
            <SearchBar handleInput={handleInput}/>
        </>
    );
}