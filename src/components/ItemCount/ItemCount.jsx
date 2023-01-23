import { useState } from "react";

const ItemCount = ({initialValue, stock}) => {
    const [value, setValue] = useState(initialValue);

    const increaseCounter = () => { (value < stock) &&setValue(value + 1) };
    const decreaseCounter = () => { (value > initialValue) && setValue(value - 1) };
    return (
        <div>
            <button className="btn btn-dark" onClick={decreaseCounter}>-</button>
            {value}
            <button className="btn btn-dark" onClick={increaseCounter}>+</button>
        </div>
    );
};

export default ItemCount;