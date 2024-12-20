import {Link} from "react-router";

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/pokemon">
                            pokemon
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}