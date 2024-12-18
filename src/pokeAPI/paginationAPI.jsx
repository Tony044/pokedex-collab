export async function fetchPagination() {
    let newPokemons = {};

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${10}&offset=0`);
        newPokemons = await response.json();
    } catch (error) {
        console.log(error.message)
    }

    return newPokemons;
}