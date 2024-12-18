import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import {SearchBar} from "./SearchBar.jsx";

export function Home({pokemons, handleInput}) {
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