import './Pokedex.css'
import {Route, Routes} from "react-router";
import {Home} from "./Components/Index/Home.jsx";
import {Pokemon} from "./Components/Pokemon/Pokemon.jsx";
import {Layout} from "./Components/Layout.jsx";
import {PokemonHome} from "./Components/Pokemon/PokemonHome.jsx";
import {PokemonLayout} from "./Components/Pokemon/PokemonLayout.jsx";

export function Pokedex() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="pokemon" element={<PokemonLayout/>}>
                <Route index element={<PokemonHome/>}/>
                <Route path=":pokemon" element={<Pokemon/>}/>
            </Route>
        </Routes>
    )
}