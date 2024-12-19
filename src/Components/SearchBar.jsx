import "./SearchBar.css"

export function SearchBar({handleInput}) {
    return (
        <input className="search-bar"
               type="text"
               placeholder="Enter the name of a pokemon"
               onKeyUp={handleInput}/>
    )
}