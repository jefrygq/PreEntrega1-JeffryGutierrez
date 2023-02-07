import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Computers</a></li>
                <li><a className="dropdown-item" href="#">Cellphones</a></li>
                <li><a className="dropdown-item" href="#">TVs</a></li>
                <li><a className="dropdown-item" href="#">Electronics</a></li>
            </ul>
        </li>
    
    );
}

export default Categories;