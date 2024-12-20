import {useEffect, useState} from "react";
import {fetchPagination} from "../../pokeAPI/paginationAPI.jsx";
import "./Home.css"

export function Home() {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        async function initPokemons() {
            const newPokemons = await fetchPagination();
            setPokemons(newPokemons);
        }

        initPokemons();
    }, []);

    return (
        <>
            <section className="title-container">
                <img className="title-image" src="/pokeball-pokemon-svgrepo-com.svg" alt="pokeball"/>
                <h1 className="title-title">Welcome in the pokedex</h1>
                <img className="title-image" src="/pokeball-pokemon-svgrepo-com.svg" alt="pokeball"/>
            </section>
            <section className="pokemon-list">
                {Object.keys(pokemons).length ?
                    pokemons.results.map((pokemon) => (
                        <article key={pokemon.name} className={pokemon.name}>
                            {pokemon.name}
                        </article>
                    ))
                    : "Pokemons Not Found !"
                }
            </section>
        </>
    );
}