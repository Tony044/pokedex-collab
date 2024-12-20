// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Pokedex.css'
import {Route, Routes, useParams, useNavigate, useLocation} from "react-router";
import {useEffect, useState} from "react";

async function fetchPokemons() {
    let newPokemons = {};

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${10}&offset=0`);
        newPokemons = await response.json();
    } catch (error) {
        console.log(error.message)
    }

    return newPokemons;
}

export function Pokedex() {
    const navigate = useNavigate();
    const location = useLocation();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        async function initPokemons() {
            setPokemons({});
            if (!isHome) {return;}
            const newPokemons = await fetchPokemons();
            setPokemons(newPokemons);
        }

        let isHome = location.pathname === "/"
        initPokemons();
    }, [location]);

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
                <Route index element={<Home pokemons={pokemons} handleInput={handleInput}/>}/>
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

function Home({pokemons, handleInput}) {
    return (
        <>
            <Header/>
            <main>
                <p>Bienvenue</p>
                <SearchBar handleInput={handleInput}/>
                <section>
                    {pokemons.results?.map((pokemon) => (
                        <article key={pokemon.name} className={pokemon.name}>{pokemon.name}</article>
                    ))}
                </section>
            </main>
            <Footer/>
        </>
    );
}

async function fetchPokemon(pokemon) {
    let data = {};

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        data = await response.json();
        const pokemonSpeciesURL = data.species.url;
        data = {
            id: data.id,
            name: data.name,
            picture: data.sprites.other["official-artwork"].front_default,
            types: data.types
        }
        response = await fetch(pokemonSpeciesURL);
        const description = await response.json();
        data = {...data, description: description.flavor_text_entries[0].flavor_text}
    } catch (error) {
        console.error(error.message);
    }
    return data
}

function Pokemon({handleInput}) {
    const {pokemon} = useParams();
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function getData() {
            const data = await fetchPokemon(pokemon);
            setPokemonData(data);
        }

        getData();
    }, [pokemon]);

    return (
        <>
            <Header/>
            <main>
                <p>{pokemon}</p>
                <SearchBar handleInput={handleInput}/>
                {pokemonData ?
                    <section className="pokemon">
                        <div className="pokemon-name">{pokemonData.name}</div>
                        <div className="pokemon-picture">
                            <img src={pokemonData.picture} alt={pokemonData.name}/>
                        </div>
                        <div className="pokemon-types">{JSON.stringify(pokemonData.types)}</div>
                        <div className="pokemon-description">
                            <p>
                                {pokemonData.description.replace(/\n/, " ").replace(`\u000c`, " ")}
                            </p>
                        </div>
                        <div className="pokemon-id">{pokemonData.id}</div>
                    </section> : null
                }
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