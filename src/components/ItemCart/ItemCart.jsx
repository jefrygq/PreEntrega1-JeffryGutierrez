import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();

    return (
        // "id": 1,
        // "nombre": "Notebook",
        // "precio": 60000,
        // "stock": 30,
        // "qty: 2"
        <tr scope="row">
            <td><img src={product.img} className="img-thumbnail" width={100} alt={product.name} /></td>
            <td>{product.nombre}</td>
            <td>${new Intl.NumberFormat('de-DE').format(product.precio)}</td>
            <td>{product.qty}</td>
            <td>${new Intl.NumberFormat('de-DE').format(product.qty * product.precio)}</td>
            <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button></td>
        </tr>
    );
};
export default ItemCart;