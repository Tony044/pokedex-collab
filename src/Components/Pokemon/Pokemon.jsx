import {useOutletContext, useParams} from "react-router";
import {useEffect, useState} from "react";
import {fetchPokemon} from "../../pokeAPI/pokemonAPI.jsx";
import {SearchBar} from "./SearchBar.jsx";
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
                        <frame className="pokemon-picture">
                            <img className="pokemon-image" src={pokemonData.picture} alt={pokemonData.name}/>
                        </frame>
                        <ul className="pokemon-types">
                            {pokemonData.types.map((type) => (
                                <li key={type.type.name}>
                                    {type.type.name}
                                </li>
                            ))}
                        </ul>
                        <div className="pokemon-description">
                            <p>{pokemonData.description}</p>
                        </div>
                        <div className="pokemon-id">
                            <p>{pokemonData.id}</p>
                        </div>
                    </>
                    : <div>Pokemon not found</div>
                }
            </section>
        </>
    );
}