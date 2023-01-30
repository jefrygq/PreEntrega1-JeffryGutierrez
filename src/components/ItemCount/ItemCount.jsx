import { useState } from "react";

const ItemCount = ({initialValue, stock}) => {
    const [value, setValue] = useState(initialValue);

    const increaseCounter = () => { (value < stock) &&setValue(value + 1) };
    const decreaseCounter = () => { (value > initialValue) && setValue(value - 1) };
    return (
        <div className="input-group mb-3">
            <span className="input-group-text"><button className="btn" onClick={decreaseCounter}>-</button></span>
            <input type="text" className="form-control text-center" readOnly value={value} />
            <span className="input-group-text"><button className="btn" onClick={increaseCounter}>+</button></span>
        </div>
    );
};

export default ItemCount;