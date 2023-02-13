import ItemList from "../ItemList/ItemList";

const CartTable = ({products}) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">QTY</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <ItemList items={products} template={'itemCart'} />
            </tbody>
        </table>
    );
};

export default CartTable;