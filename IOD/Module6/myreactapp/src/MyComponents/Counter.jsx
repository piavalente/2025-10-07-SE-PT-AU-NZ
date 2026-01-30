import { useState } from "react"; //import STATE

function Counter () {
    const [count, setCount] = useState(0); //store information in the useState function //2 piece of information destructured
    //if you want to update COUNT, you can only update it here.
    //count is data
    //setCount will update count
    //whatever data is passed in useState will be COUNT's initial value.

    // DO NOT update state here (this runs every render)
    // let newcount = count +1
    // setCount(newcount);

    //OR

    //setCount (count +1)

    //let count = 0; //variable here. SHOULD BE STORED IN THE useState. THIS CAN BE ELIMINATE

    return(
        <>
            <div>Counter: {count}</div> {/*substitute value here*/}
            <button onClick = {() => {
               setCount(count + 1); 
            }}
            >
                Counter
            </button>
        </>
    );
}

export default Counter;
