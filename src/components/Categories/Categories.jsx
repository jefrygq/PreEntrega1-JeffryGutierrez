const Categories = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Computadoras</a></li>
                <li><a className="dropdown-item" href="#">Celulares</a></li>
                <li><a className="dropdown-item" href="#">Televisores</a></li>
                <li><a className="dropdown-item" href="#">Electronica</a></li>
            </ul>
        </li>
    
    );
}

export default Categories;