import {Link} from "react-router";
import "./Header.css"

export function Header() {
    return (
        <header>
            <nav className="navigation">
                <ul className="navigation-list">
                    <Link to="/">
                    <li className="navigation-list-home">home</li>
                    </Link>
                    <Link to="/pokemon">
                    <li className="navigation-list-pokemon">pokemon</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}