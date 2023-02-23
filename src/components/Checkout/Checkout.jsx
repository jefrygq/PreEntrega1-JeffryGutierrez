import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { toast } from 'react-toastify';

const Checkout = () => {
    const {cart, getSubtotal} = useCartContext();
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
        
        e.target.reset(); // Reset form

        toast.success("Your order was placed successfully!");
        navigate("/"); // Redirect to homepage
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
                        <input type="text" className="form-control" name="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" rows={3} defaultValue={""} />
                    </div>

                    <button type="submit" className="btn btn-primary">Place Order</button>
                </form>
            </>
            }
            
        </div>
    );
};

export default Checkout;