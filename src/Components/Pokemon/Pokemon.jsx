import {useOutletContext, useParams} from "react-router";
import {useEffect, useState} from "react";
import {fetchPokemon} from "../../pokeAPI/pokemonAPI.jsx";
import {SearchBar} from "../SearchBar.jsx";
import "./Pokemon.css"


export function Pokemon() {
    const handleInput = useOutletContext()
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
            <SearchBar handleInput={handleInput}/>
            <section className="pokemon">
                {Object.keys(pokemonData).length ?
                    <>
                        <div className="pokemon-name">{pokemonData.name}</div>
                        <div className="pokemon-picture">
                            <img src={pokemonData.picture} alt={pokemonData.name}/>
                        </div>
                        <div className="pokemon-types">
                            {pokemonData.types.map((type) => (
                                <div key={type.type.name}>
                                    {type.type.name}
                                </div>
                            ))}
                        </div>
                        <div className="pokemon-description">
                            <p>{pokemonData.description}</p>
                        </div>
                        <div className="pokemon-id">{pokemonData.id}</div>
                    </>
                    : <div>Pokemon not found</div>
                }
            </section>
        </>
    );
}