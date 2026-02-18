import { useState } from "react"; 
import { useRef } from "react"; //import useRef

function Counter () {
    const [count, setCount] = useState(0); 

    const counterRef = useRef(0)//return and pass initial value here

    //alert(counterRef.current)//has single property which is CURRENT

    return(
        <>
            <div>Counter: {count}</div> 
            <button onClick = {() => {
                counterRef.current = counterRef.current + 1; //increment current value of counter
                setCount(count + 1); 
            }}
            >
                Counter
            </button>
        </>
    );
}

export default Counter;



//useRef is referenced by counterRef
//counterRef does not trigger any re-render
