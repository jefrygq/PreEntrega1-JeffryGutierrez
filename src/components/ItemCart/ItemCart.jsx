import { Link } from "react-router-dom";

const ItemCart = ({product}) => {

    return (
        // "id": 1,
        // "nombre": "Notebook",
        // "precio": 60000,
        // "stock": 30,
        // "qty: 2"
        <tr scope="row">
            <td><img src={`../img/${product.img}`} className="img-thumbnail" width={100} alt={product.name} /></td>
            <td>{product.nombre}</td>
            <td>{product.qty}</td>
            <td>$ {new Intl.NumberFormat('de-DE').format(product.precio)}</td>
            <td>$ {new Intl.NumberFormat('de-DE').format(product.qty * product.precio)}</td>
        </tr>
    );
};
export default ItemCart;