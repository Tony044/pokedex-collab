import "./SearchBar.css"

export function SearchBar({handleInput}) {
    return (
        <section className="search-bar">
            <input className="search-bar-input"
                   type="text"
                   placeholder="Enter the name of a pokemon"
                   onKeyUp={handleInput}/>
        </section>
    )
}