import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartTable from "../CartTable/CartTable";
import CartTotals from "../CartTotals/CartTotals";

const Cart = () => {
    const {cart, emptyCart} = useCartContext();

    return (
        <div className="container my-3">
            <h2>Cart</h2>
            {!cart.length ?
            <>
                <p>There are no items in cart try again</p>
                <Link to="/" className="btn btn-primary">Continue Shopping</Link>
            </>
            :
            <>
                <p>Items in cart: </p>
                <CartTable products={cart} />
                <button className="btn btn-secondary clearfix" onClick={emptyCart}>Empty Cart</button>

                <CartTotals />
            </>
            }
            
        </div>
    );
};

export default Cart;