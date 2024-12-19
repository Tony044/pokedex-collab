import "./SearchBar.css"

export function SearchBar({handleInput}) {
    return (
        <input className="search-bar"
               type="text"
               placeholder="Entrez le nom d'un pokémon"
               onKeyUp={handleInput}/>
    )
}