import { useState, useEffect } from "react";

const ItemCount = ({initialValue, stock, setQty}) => {
    const [value, setValue] = useState(initialValue);

    const increaseCounter = () => { (value < stock) && setValue(value + 1) };
    const decreaseCounter = () => { (value > initialValue) && setValue(value - 1) };

    useEffect(() => {
        setQty(value);
    }, [value]);

    return (
        <div className="input-group mb-3">
            <span className="input-group-text"><button className="btn" onClick={decreaseCounter}>-</button></span>
            <input type="text" className="form-control text-center" readOnly value={value} />
            <span className="input-group-text"><button className="btn" onClick={increaseCounter}>+</button></span>
        </div>
    );
};

export default ItemCount;