import ItemDetails from "../ItemDetails/ItemDetails";

const Item = ({product}) => {

    return (
        // "id": 1,
        // "idCategoria": 1,
        // "nombre": "Notebook",
        // "marca": "Lenovo",
        // "modelo": "Y510P",
        // "precio": 60000,
        // "stock": 30,
        // "img": "notebook-lenovo.jpg"
        <div className="card col-3">
            <img src={`./img/${product.img}`} className="card-img-top" alt={`Image of ${product.name}`} />
            <div className="card-body">
                <h5 className="card-title">{product.nombre + ' ' + product.modelo}</h5>
                <p className="card-text">{product.marca}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(product.precio)}</p>
                <a href="#" className="btn btn-primary">View Product</a>
            </div>
        </div>
    );
};
export default Item;