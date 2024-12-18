export async function fetchPokemon(pokemon) {
    let data = {};

    try {
        const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const dataPokemon = await responsePokemon.json();

        const pokemonSpeciesURL = dataPokemon.species.url;
        const responseSpecies = await fetch(pokemonSpeciesURL);
        const dataSpecies = await responseSpecies.json();

        data = {
            id: dataPokemon.id,
            name: dataPokemon.name,
            picture: dataPokemon.sprites.other["official-artwork"].front_default,
            types: dataPokemon.types,
            description: dataSpecies.flavor_text_entries[0].flavor_text
        }
    } catch (error) {
        console.error(error.message);
    }

    return data
}