import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { toast } from 'react-toastify'

import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({product}) => {
    const [qty, setQty] = useState(1);
    const {addProduct} = useCartContext();

    const onAdd = () => {
        addProduct(product, qty);
        toast.success(`Added ${qty} ${qty>1?product.name+'s':product.nombre} to cart`);
    };

    return (
        <div className="row g-0">
            <div className="col-md-6">
                <img src={product.img} className="card-img-top" alt={product.name} />
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{product.nombre + ' ' + product.modelo}</h5>
                    <p className="card-text"><strong>Brand:</strong> {product.marca}</p>
                    <p className="card-text"><strong>Price:</strong> $ {new Intl.NumberFormat('de-DE').format(product.precio)}</p>
                    <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                    <ItemCount initialValue={1} stock={product.stock} setQty={setQty} />
                    <button className="btn btn-primary" onClick={onAdd}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};
export default ItemDetails;