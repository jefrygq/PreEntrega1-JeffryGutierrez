import { Link } from "react-router-dom";
import CartTable from "../CarTable/CartTable";
import ItemList from "../ItemList/ItemList";

const Cart = () => {
    // "id": 1,
    // "idCategoria": 1,
    // "nombre": "Notebook",
    // "marca": "Lenovo",
    // "modelo": "Y510P",
    // "precio": 60000,
    // "stock": 30,
    // "img": "notebook-lenovo.jpg"
    const products = [
        {id: 1, nombre: "Notebook", precio: 60000, stock: 30, qty: 2, img: "notebook-lenovo.jpg"},
        {id: 2, nombre: "Mouse", precio: 500, stock: 20, qty: 1, img: "notebook-lenovo.jpg"},
        {id: 3, nombre: "Monitor", precio: 3200, stock: 10, qty: 3, img: "notebook-lenovo.jpg"}
    ];
    // const products = [];

    return (
        <div className="container my-3">
            <h2>Cart</h2>
            {!products.length ?
            <>
                <p>There are no items in cart try again</p>
                <Link to="/" className="btn btn-primary">Continue Shopping</Link>
            </>
            :
            <>
                <p>Items in cart: </p>
                <CartTable products={products} />
                <Link to="/checkout" className="btn btn-primary">Go to payment</Link>
            </>
            }
            
        </div>
    );
};

export default Cart;