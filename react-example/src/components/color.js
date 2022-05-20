import React, { useState } from "react";
import "../App.css"

function ColorComponent() {
    const [count, setCounter] = useState(0);
    const [isRed, setColor] = useState(false);
    const increment = () => {
        setCounter(count + 1);
        setColor(!isRed);
    }
    return(
        <div className="tweet">
         <h1 className={isRed?"red":""}>Change color</h1>
        <h1>{count}</h1>
        <button onClick={increment}>Click</button>
        </div>
    )
}
export default ColorComponent;