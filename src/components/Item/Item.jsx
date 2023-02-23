import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkmodeContext";

const Item = ({product}) => {
    const {darkMode} = useDarkModeContext();

    return (
        // "id": 1,
        // "idCategoria": 1,
        // "nombre": "Notebook",
        // "marca": "Lenovo",
        // "modelo": "Y510P",
        // "precio": 60000,
        // "stock": 30,
        // "img": "notebook-lenovo.jpg"
        <div className={`card col-3 ${darkMode ? 'bg-dark':''}`}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.nombre + ' ' + product.modelo}</h5>
                <p className="card-text">{product.marca}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(product.precio)}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Product</Link>
            </div>
        </div>
    );
};
export default Item;