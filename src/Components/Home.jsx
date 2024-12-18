import {SearchBar} from "./SearchBar.jsx";

export function Home({pokemons, handleInput}) {
    return (
        <>
            <p>Bienvenue</p>
            <SearchBar handleInput={handleInput}/>
            <section>
                {pokemons.results?.map((pokemon) => (
                    <article key={pokemon.name} className={pokemon.name}>{pokemon.name}</article>
                ))}
            </section>
        </>
    );
}