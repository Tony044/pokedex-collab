export function SearchBar({handleInput}) {
    return (
        <input type="text"
               placeholder="Entrez le nom d'un pokémon"
               onKeyUp={handleInput}/>
    )
}