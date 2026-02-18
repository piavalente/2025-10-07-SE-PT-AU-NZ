import { useState, useEffect } from "react";
import { useData } from "../Hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD']; //for dropdown list

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    
    //remove this
    //const [rate, useRate] = useState(null);
    
    /*
    useEffect(() => { //runs after the component renders
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`) //Fetch data
            .then((response) => response.json())
            .then((json) => setRate(json.bitcoin[currency.toLowerCase()])); //API display is lowercase

        return () => {
            console.log('cleanup called');
        };
    }, [currency]);
    */

    
    //Fetch Rate
    const data = useData (
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    );

    //Extract Rate
    const rate = data ? data.bitcoin[currency.toLowerCase()] : "not found";

    const options = currencies.map(curr => <option value={curr}
            key={curr}>{curr}</option>);

    return (
        <div className= "BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select 
                    value={currency} 
                    onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>1 Bitcoin = {rate} {currency}</p>
        </div>
    );
}


export default BitcoinRates;