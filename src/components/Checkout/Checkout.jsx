import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { toast } from 'react-toastify';
import { createOrder, getOrder, getProduct, updateProduct } from '../../firebase/firebase';

const Checkout = () => {
    const {cart, getSubtotal, emptyCart} = useCartContext();
    const formData = React.useRef();
    let navigate = useNavigate();

    const iva = 0.13;
    const subtotal = getSubtotal();
    const taxes = subtotal * iva;
    const total = subtotal + taxes;

    const queryForm = (e) => {
        e.preventDefault();
        
        const data = new FormData(formData.current); // generate iterator
        const customerData = Object.fromEntries(data); // convert iterator to object
        console.log(customerData);

        if(customerData.email != customerData.confirm_email) {
            toast.error("Emails don't match");
            return false;
        }

        // update stock of products
        const aux = [...cart];
        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodDb => {
                prodDb.stock -= prodCart.qty;
                updateProduct(prodCart.id, prodDb);
            });
        });

        // create new order
        createOrder(customerData, aux, total, new Date().toISOString()).then(order => {
            e.target.reset(); // Reset form

            toast.success(`Your order was placed successfully!\nID: ${order.id}\nTotal: $ ${new Intl.NumberFormat('de-DE').format(total)}`);
            
            emptyCart();
            navigate("/");
        });
    };

    return (
        <div className="container my-3">
            <h2>Checkout</h2>
            <p className="fs-3">Paying a total of: <strong>${new Intl.NumberFormat('de-DE').format(total)}</strong></p>
            {!cart.length ?
            <>
                <p>There are no items in cart add some products to the cart before trying to checkout.</p>
                <Link to="/" className="btn btn-primary">Continue Shopping</Link>
            </>
            :
            <>
                <form onSubmit={queryForm} ref={formData}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" name="name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm_email" className="form-label">Confirm Email</label>
                        <input type="email" className="form-control" name="confirm_email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea className="form-control" name="address" required rows={3} defaultValue={""} />
                    </div>

                    <button type="submit" className="btn btn-primary">Place Order</button>
                </form>
            </>
            }
            
        </div>
    );
};

export default Checkout;