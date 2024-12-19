import './Pokedex.css'
import {Route, Routes, useNavigate, useLocation} from "react-router";
import {useEffect, useState} from "react";
import {fetchPagination} from "./pokeAPI/paginationAPI.jsx";
import {Home} from "./Components/Home.jsx";
import {Pokemon} from "./Components/Pokemon.jsx";
import {Layout} from "./Components/Layout.jsx";
import {fetchPokemon} from "./pokeAPI/pokemonAPI.jsx";

export function Pokedex() {
    const navigate = useNavigate();
    const location = useLocation();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        async function initPokemons() {
            setPokemons({});
            if (!isHome) return;
            const newPokemons = await fetchPagination();
            setPokemons(newPokemons);
        }

        const isHome = location.pathname === "/"
        initPokemons();
    }, [location]);

    function handleInput(event) {
        if (event.key !== "Enter") return;
        navigate(event.target.value);
        event.target.value = "";
    }

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home pokemons={pokemons} handleInput={handleInput}/>}/>
                <Route path=":pokemon" loader={fetchPokemon} element={<Pokemon handleInput={handleInput}/>}/>
            </Route>
        </Routes>
    )
}