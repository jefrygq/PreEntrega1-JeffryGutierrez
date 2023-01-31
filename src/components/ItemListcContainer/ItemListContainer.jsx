import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting, description}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./json/products.json")
        .then(response => response.json())
        .then(products => {
            //Array de productos en JSX
            const productsList = ItemList({products});
            setProducts(productsList);
        })
    }, []);

    return (
        <div className='container p-3'>
            <h2>{greeting}</h2>
            <p>{description}</p>
            <div className="itemListContainer row g-4">
                {products}
            </div>
        </div>
    );
};

export default ItemListContainer;