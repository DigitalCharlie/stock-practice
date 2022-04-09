// Dependencies
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";

// Data stuffs
import stocksList from '../data'


export default function Dashboard() {
    const apiKey = "c45356b6473c3e8ba5c0318e2c894442"
    const stockURL = stocksList.map((s => s.symbol)).join(',')
    const URL = `https://financialmodelingprep.com/api/v3/quote/${stockURL}?apikey=${apiKey}`;
    const [stocks, setStocks] = useState([]);

    // BOO NEED PREMIUM TO GET THIS MULTI VERSION TO WORK
    // const getStocks = async() => {
    //     try {
    //         const response = await fetch(URL);
    //         const data = await response.json();
    //         setStocks(data);
    //     }   catch(err) {
    //         console.error(err)
    //     }
    // };

    // useEffect(() => {
    //     getStocks()
    // }, []);


    const loaded = () => {

        return (
            <main>
                <h1>Stocks</h1>
                <p>Check out a stock. It was going to pull the prices on this page by creating a call with all these stocks, but alas, that's a premium endpoint.</p>
                <ul>
                {
                    stocksList.map((stock, idx) => {
                        const {symbol} = stock
                        return (
                            <li key={idx}>
                                <Link to={`/stocks/${symbol}`} state={{test:"This is a test of passing via link, yay"}}>
                                    {symbol}
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </main>
        )

    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    };

    return (
        // stock && stock.price ? loaded() : loading()
        loaded()
    );
}