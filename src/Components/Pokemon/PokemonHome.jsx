import {SearchBar} from "./SearchBar.jsx";
import {useOutletContext} from "react-router";

export function PokemonHome() {
    const handleInput = useOutletContext()

    return (
        <>
            <SearchBar handleInput={handleInput}/>
        </>
    );
}