import { useState, useEffect } from "react";
import ItemDetails from "../ItemDetails/ItemDetails"

const ItemDetailsContainer = ({greeting, description}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("./json/products.json")
        .then(response => response.json())
        .then(products => {
            //Array de productos en JSX
            console.log(products);
            const item = products.find(prod => prod.id === 3);
            setProduct(item);
        })
    }, []);

    return (
        <div className="container card my-3">
            <ItemDetails product={product} />
        </div>
    );
};

export default ItemDetailsContainer;