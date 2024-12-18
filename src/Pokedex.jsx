// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Pokedex.css'
import {Route, Routes, useParams, useNavigate} from "react-router";
import {useState} from "react";

export function Pokedex() {
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);

    function handleInput(event) {
        if (event.key !== "Enter") {
            return;
        }
        navigate(event.target.value);
        event.target.value = "";
    }

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home handleInput={handleInput}/>}/>
                <Route path=":pokemon" element={<Pokemon handleInput={handleInput}/>}/>
            </Route>
        </Routes>
    )
}

function Header() {
    return (
        <header>

        </header>
    )
}

function Footer() {
    return (
        <footer>

        </footer>
    )
}

function Home({handleInput}) {
    return (
        <>
            <Header/>
            <main>
                <p>Bienvenue</p>
                <SearchBar handleInput={handleInput}/>
            </main>
            <Footer/>
        </>
    );
}

function Pokemon({handleInput}) {
    const {pokemon} = useParams();
    return (
        <>
            <Header/>
            <main>
                <p>{pokemon}</p>
                <SearchBar handleInput={handleInput}/>
            </main>
            <Footer/>
        </>
    );
}

function SearchBar({handleInput}) {
    return (
        <input type="text"
               placeholder="Entrez le nom d'un pokémon"
               onKeyUp={handleInput}/>
    )
}