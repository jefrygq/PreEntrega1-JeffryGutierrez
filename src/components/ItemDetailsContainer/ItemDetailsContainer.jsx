import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkmodeContext";
import { getProduct } from "../../firebase/firebase";
import ItemDetails from "../ItemDetails/ItemDetails"

const ItemDetailsContainer = () => {
    const {darkMode} = useDarkModeContext();

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
        <div className={`container card my-3 ${darkMode ?'bg-dark':''}`}>
            <ItemDetails product={product} />
        </div>
    );
};

export default ItemDetailsContainer;