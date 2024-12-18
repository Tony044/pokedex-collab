// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Pokedex.css'
import {Route, Routes, useParams, useNavigate} from "react-router";
import {useEffect, useRef, useState} from "react";
import { use } from 'react';

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
    console.log(pokemon);
    const [name, setName] = useState(null);
    useEffect(() => {
        const getData = async () => {
            
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const pokemonResponse = await response.json();

                const id = pokemonResponse.id;
                const name = pokemonResponse.name;
                const description = pokemonResponse.species.name;
                const picture = pokemonResponse.sprites.front_default;
                
                console.log(id, name, description, picture);

                setName({ id, name, description, picture});
            } catch (error) {
                console.error(error.message);
            }
        }
        getData();
    }, []);


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