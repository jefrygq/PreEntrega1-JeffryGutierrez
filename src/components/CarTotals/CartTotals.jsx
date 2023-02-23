import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkmodeContext";

const CartTotals = ({products}) => {
    const {darkMode} = useDarkModeContext();
    const iva = 0.13;
    const subtotal = products.reduce(
        (accumulator, currentProd) => accumulator + (currentProd.precio * currentProd.qty),
        0
    );

    let taxes = subtotal*iva;

    return (
        <div className="col-6 float-end clearfix">
            <table className={`table ${darkMode?'table-dark':''}`}>
                <tbody>
                    <tr>
                        <td>Subtotal:</td>
                        <td className="text-end">${subtotal}</td>
                    </tr>
                    <tr>
                        <td>Taxes (13% IVA):</td>
                        <td className="text-end">${taxes}</td>
                    </tr>
                    <tr>
                        <td className="fs-3"><strong>Total:</strong></td>
                        <td className="fs-3 text-end"><strong>${subtotal+taxes}</strong></td>
                    </tr>
                </tbody>
            </table>
            <Link to="/checkout" className="btn btn-primary btn-lg float-end">Continue to payment</Link>
        </div>
    );
};

export default CartTotals;