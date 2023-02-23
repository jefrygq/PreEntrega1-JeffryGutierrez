import { Link } from "react-router-dom";
import CartTable from "../CarTable/CartTable";
import CartTotals from "../CarTotals/CartTotals";

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
        {id: 1, nombre: "Notebook", precio: 60000, stock: 30, qty: 2, img: "https://firebasestorage.googleapis.com/v0/b/coderhouse-react-project-9c212.appspot.com/o/iphone-x.jpg?alt=media&token=548d9034-2244-49db-95db-87799a206cbb"},
        {id: 2, nombre: "Mouse", precio: 500, stock: 20, qty: 1, img: "https://firebasestorage.googleapis.com/v0/b/coderhouse-react-project-9c212.appspot.com/o/iphone-x.jpg?alt=media&token=548d9034-2244-49db-95db-87799a206cbb"},
        {id: 3, nombre: "Monitor", precio: 3200, stock: 10, qty: 3, img: "https://firebasestorage.googleapis.com/v0/b/coderhouse-react-project-9c212.appspot.com/o/iphone-x.jpg?alt=media&token=548d9034-2244-49db-95db-87799a206cbb"}
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
                <Link to="/checkout" className="btn btn-secondary clearfix">Empty Cart</Link>

                <CartTotals products={products} />
            </>
            }
            
        </div>
    );
};

export default Cart;