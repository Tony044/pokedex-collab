import {useEffect, useState} from "react";
import {fetchPagination} from "../../pokeAPI/paginationAPI.jsx";

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
            <p>Bienvenue</p>
            {Object.keys(pokemons).length ?
                <section>
                    {pokemons.results.map((pokemon) => (
                        <article key={pokemon.name} className={pokemon.name}>
                            {pokemon.name}
                        </article>
                    ))}
                </section>
                : <section>ERROR 404</section>
            }
        </>
    );
}