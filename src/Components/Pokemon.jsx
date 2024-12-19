import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {fetchPokemon} from "../pokeAPI/pokemonAPI.jsx";
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
            <p>{pokemon}</p>
            <SearchBar handleInput={handleInput}/>
            {Object.keys(pokemonData).length ?
                <section className="pokemon">
                    <div className="pokemon-name">{pokemonData.name}</div>
                    <div className="pokemon-picture">
                        <img src={pokemonData.picture} alt={pokemonData.name}/>
                    </div>
                    <div className="pokemon-types">{JSON.stringify(pokemonData.types)}</div>
                    <div className="pokemon-description">
                        <p>{pokemonData.description}</p>
                    </div>
                    <div className="pokemon-id">{pokemonData.id}</div>
                </section> : <section>ERROR 404</section>
            }
        </>
    );
}