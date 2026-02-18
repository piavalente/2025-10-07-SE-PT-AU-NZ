import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD']; //for dropdown list

function BitcoinRates() {
    //What changes:
    const [currency, setCurrency] = useState(currencies[0]);
    const [rate, setRate] = useState(null); //i don't know the value yet. it is not 0.

    
    useEffect(() => { //runs after the component renders
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`) //Fetch data
            .then((response) => response.json())
            .then((json) => setRate(json.bitcoin[currency.toLowerCase()])); //API display is lowercase

        return () => {
            console.log('cleanup called');
        };
    }, [currency]);

    const options = currencies.map(curr => <option value={curr}
        key={curr}>{curr}</option>);

    return (
        <div className=
            "BitcoinRates componentBox">
            <h2>Bitcoin Exchange Rate</h2>
            <label>Choose currency:
                <select value={currency} onChange={e =>
                    setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>1 Bitcoin = {rate} {currency}</p>
        </div>
    );
}


export default BitcoinRates;