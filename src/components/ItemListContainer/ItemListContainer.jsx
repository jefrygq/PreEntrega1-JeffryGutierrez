import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();

    const categoryMap = {
        'computers' : 1,
        'cellphones' : 2,
        'tvs' : 3,
        'accesories' : 4
    };

    useEffect(() => {
        getProducts()
        .then(products => {
            let items = products;
            const idCategory = categoryMap[categoryName];
            
            if(idCategory) {
                items = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === idCategory);
            }

            const productsList = ItemList({items});
            setProducts(productsList);
        })
    }, [categoryName]);

    return (
        <div className="container my-3">
            <h2>{categoryName ? categoryName.toUpperCase() : 'MyTech'}</h2>
            
            <div className="itemListContainer row g-4">
                {products}
            </div>
        </div>
    );
};

export default ItemListContainer;