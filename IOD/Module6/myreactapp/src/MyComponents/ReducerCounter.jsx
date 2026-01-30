import { useReducer } from "react";

function ReduceCounter () {
    const [counter, dispatch] = useReducer(reducer ,0)

    const handleIncrement = () => {
        dispatch({type: "increment"});
    };

    const handleDecrement = () => {
        dispatch({type: "decrement"});
    };

    function reducer(state, action) {
        if (action.type === "increment") {
            return state + 1;
        } else if (action.type === "decrement") {
            return state - 1;
        } else {
            return state;
        }
    }

    return(
        <>
        <h2>Counter:{counter}</h2>
        <button onClick={handleIncrement}>Reducer Increment</button>
        <button onClick={handleDecrement}>Reducer Decrement</button>

        </>
    );
}


export default ReduceCounter;