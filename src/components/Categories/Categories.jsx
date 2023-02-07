import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/category" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="category/computers">Computers</Link></li>
                <li><Link className="dropdown-item" to="category/cellphones">Cellphones</Link></li>
                <li><Link className="dropdown-item" to="category/tvs">TVs</Link></li>
                <li><Link className="dropdown-item" to="category/accesories">Accesories</Link></li>
            </ul>
        </li>
    
    );
}

export default Categories;