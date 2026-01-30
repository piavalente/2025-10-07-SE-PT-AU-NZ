import React from "react"

function Operators ({onPress}) //passed a prop - onPress
{
 

    return (
        <>
        <div>
            <button className="button operator" onClick={() => onPress('+')}>+</button>
            <button className="button operator" onClick={() => onPress('-')}>-</button>
            <button className="button operator" onClick={() => onPress('*')}>*</button>
            <button className="button operator" onClick={() => onPress('/')}>/</button>
        </div>
    </>
    );  
}

export default Operators

