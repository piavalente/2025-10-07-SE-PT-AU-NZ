import React from "react";
import Operators from "./Operators";
import { useState } from "react";


function InputNumbers () {
    //these all change depending on the user's inout
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const calculate = (operator) => {
        const n1 = parseFloat(num1); //ParseFloat convert string to number 
        const n2 = parseFloat(num2);
        let result = 0;

    if  (operator == '+') result = n1 + n2;
    if  (operator == '-') result = n1 - n2;
    if  (operator == '*') result = n1 * n2;
    if  (operator == '/') result = n1 / n2;

    setResult(result);

    }


    return(
        <>
            <div className = "Calculator componentBox">
                <div>
                    <input type ="text" value ={num1} onChange={(e) => setNum1(e.target.value)} placeholder = "0" style={{ width: '50px', height: '50px', fontSize: '20px', textAlign: 'center' }}></input>
                </div>
                <Operators onPress = {calculate}></Operators>
                <div>
                    <input type ="text" value ={num2} onChange={(e) => setNum2(e.target.value)} placeholder = "0" style={{ width: '50px', height: '50px', fontSize: '20px', textAlign: 'center'}}></input>
                </div>
                <div>
                    <h3>Result:</h3>
                    <input type ="text" value ={result} readOnly placeholder = "0" style={{ width: '50px', height: '50px', fontSize: '20px', textAlign: 'center'}}></input> 
                </div>
            </div>
        </>
    );
}

export default InputNumbers;