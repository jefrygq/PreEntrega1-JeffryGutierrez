import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    // add product
    const addProduct = (product, qty) => {
        if(productInCart(product.id)) {
            const index = cart.indexOf(p => p.id === product.id);
            const aux = [...cart];
            aux[index].qty += qty;

            setCart(aux);
        } else {
            const newProd = {...product, qty: qty};
            setCart([...cart,newProd]);
        }
    };
    

    // calculate subtotal
    const getSubtotal = () => {
        return cart.reduce((accumulator, prod) => {accumulator += (prod.qty * prod.price)}, 0);
    };

    // count products
    const countProducts = () => {
        return cart.reduce((accumulator, prod) => {accumulator += prod.qty}, 0);
    };

    // empty cart
    const emptyCart = () => setCart([]);

    // product exists
    const productInCart = (prod_id) => {
        return cart.find(prod => prod.id === prod_id);
    };

    // remove product
    const removeProduct = (prod_id) => {
        setCart(cart.filter((prod) => prod.id != prod_id));
    };

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, emptyCart, getSubtotal, countProducts}}>
            {props.children}
        </CartContext.Provider>
    );
};