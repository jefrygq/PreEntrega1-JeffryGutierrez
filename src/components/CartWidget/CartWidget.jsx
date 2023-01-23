

const CartWidget = ({qty}) => {
  return (
    <>
        <button className="btn btn-secondary my-2 my-sm-0">Cart</button>
        <p>{qty}</p>
    </>
  );
}

export default CartWidget;
