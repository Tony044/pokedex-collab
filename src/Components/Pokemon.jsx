import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {fetchPokemon} from "../pokeAPI/pokemonAPI.jsx";
import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import {SearchBar} from "./SearchBar.jsx";

export function Pokemon({handleInput}) {
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
                                {pokemonData.description?.replace(/\n/, " ").replace(`\u000c`, " ")}
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