import ItemCount from "../ItemCount/ItemCount";
const ItemDetails = ({product}) => {

    return (
        <div class="row g-0">
            <div class="col-md-6">
            <img src={`./img/${product.img}`} className="card-img-top" alt={`Image of ${product.name}`} />
            </div>
            <div class="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{product.nombre + ' ' + product.modelo}</h5>
                    <p className="card-text"><strong>Brand:</strong> {product.marca}</p>
                    <p className="card-text"><strong>Price:</strong> $ {new Intl.NumberFormat('de-DE').format(product.precio)}</p>
                    <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                    <ItemCount initialValue={1} stock={product.stock} />
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    );
};
export default ItemDetails;