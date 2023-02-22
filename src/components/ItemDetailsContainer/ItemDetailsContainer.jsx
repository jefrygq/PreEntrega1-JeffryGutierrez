import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";
import ItemDetails from "../ItemDetails/ItemDetails"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        getProduct(id)
        .then(product => {
            const item = product;
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