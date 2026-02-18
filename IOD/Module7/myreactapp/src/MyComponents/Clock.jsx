import { useState, useEffect } from "react";

    function Clock() {
        const [date, setDate] = useState(new Date ());

    useEffect(() => { //first argument is usually an arrow function
        const timerID = setInterval(() => tick(), 1000); //clock goes continuously
        
        return () => {
            console.log("clock component unmounted");
            clearInterval(timerID); //stops the timer
        };
    }, []); //second argument is an array of dependencies //empty [] - run this effect only once
        
    function tick() { //updates date with the current time every second.
        setDate(new Date()); //triggers a re-render with the new time.
        console.log("tick called."); 
    }

    return ( //render the date
        <>
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()} 
        </>
    );
}

export default Clock



