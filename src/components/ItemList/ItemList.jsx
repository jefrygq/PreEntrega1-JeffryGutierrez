import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

const ItemList = ({items, template}) => {

    return (
        <>
            {items.map(product => template == 'itemCart' ? <ItemCart product={product} key={product.id}/> : <Item product={product} key={product.id}/>)}
        </>
    );
};
export default ItemList;