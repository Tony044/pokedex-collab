// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Pokedex.css'
import {Route, Routes, useParams, useNavigate} from "react-router";
import {useRef} from "react";

export function Pokedex() {
    const pokemonRef = useRef(null);
    const navigate = useNavigate();

    function handleInput(event) {
        if (event.key !== "Enter") {
            return;
        }
        navigate(pokemonRef.current.value);
        pokemonRef.current.value = "";
    }

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home pokemonRef={pokemonRef} handleInput={handleInput}/>}/>
                <Route path=":pokemon" element={<Pokemon pokemonRef={pokemonRef} handleInput={handleInput}/>}/>
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

function Home({pokemonRef, handleInput}) {
    return (
        <>
            <Header/>
            <main>
                <p>Bienvenue</p>
                <SearchBar pokemonRef={pokemonRef} handleInput={handleInput}/>
            </main>
            <Footer/>
        </>
    );
}

function Pokemon({pokemonRef, handleInput}) {
    const {pokemon} = useParams();
    return (
        <>
            <Header/>
            <main>
                <p>{pokemon}</p>
                <SearchBar pokemonRef={pokemonRef} handleInput={handleInput}/>
            </main>
            <Footer/>
        </>
    );
}

function SearchBar({pokemonRef, handleInput}) {
    return (
        <input type="text"
               placeholder="Entrez le nom d'un pokémon"
               ref={pokemonRef}
               onKeyUp={handleInput}/>
    )
}