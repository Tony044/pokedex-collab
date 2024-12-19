import {SearchBar} from "./SearchBar.jsx";
import "./Home.css"

export function Home({pokemons, handleInput}) {
    return (
        <>
            <div className="container-title">
                <img className="title-image" src="/public/pokeball-pokemon-svgrepo-com.svg" alt="no image"/>
                <p className="welcome">Welcome in the pokedex</p>
                <img className="title-image" src="/public/pokeball-pokemon-svgrepo-com.svg" alt="no image"/>
            </div>
            <SearchBar handleInput={handleInput}/>
            <section className="pokemon-list">
                {pokemons.results?.map((pokemon) => (
                    <article key={pokemon.name} className={pokemon.name}>{pokemon.name}</article>
                ))}
            </section>
        </>
    );
}