import { useDarkModeContext } from "../../context/DarkmodeContext";
import ItemList from "../ItemList/ItemList";

const CartTable = ({products}) => {
    const {darkMode} = useDarkModeContext();

    return (
        <table className={`table table-hover ${darkMode?'table-dark':''}`}>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">QTY</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <ItemList items={products} template={'itemCart'} />
            </tbody>
        </table>
    );
};

export default CartTable;