import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetch("../json/products.json")
        .then(response => response.json())
        .then(products => {
            //Array de productos en JSX
            const item = products.find(prod => prod.id === parseInt(id));
            setProduct(item);
        })
    }, [id]);

    return (
        <div className="container card my-3">
            <ItemDetails product={product} />
        </div>
    );
};

export default ItemDetailsContainer;