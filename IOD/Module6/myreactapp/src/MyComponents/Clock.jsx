import { useState, useEffect } from "react";

    function Clock() {
        const [date, setDate] = useState(new Date ());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        
        return () => {
            console.log("clock component unmounted");
            clearInterval(timerID);
        };
    }, []);
        
    function tick() {
        setDate(new Date());
        console.log("tick called.");
    }

    return (
        <>
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </>
    );
}

export default Clock



