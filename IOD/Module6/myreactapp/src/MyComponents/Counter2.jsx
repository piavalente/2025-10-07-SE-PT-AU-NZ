import { useState } from "react"; //import STATE

function Counter () {
    const [count, setCount] = useState(0); //store information in the useState function //2 piece of information destructured

    return(
        <>
            <div>Counter: {count}</div> {/*substitute value here*/}
            <button onClick = {() => {
               CounterRef.current = CounterRef.current + 1
            }}
            >
                Counter
            </button>
        </>
    );
}

export default Counter2;
