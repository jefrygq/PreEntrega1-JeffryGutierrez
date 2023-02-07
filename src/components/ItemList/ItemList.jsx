import Item from "../Item/Item";

const ItemList = ({items}) => {

    return (
        <>
            {items.map(product => <Item product={product} key={product.id}/>)}
        </>
    );
};
export default ItemList;