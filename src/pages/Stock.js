import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {Link} from 'react-router-dom'

export default function Stock(props) {
    const location = useLocation()
    console.log(location.state)
    console.log(props)
    const apiKey = "c45356b6473c3e8ba5c0318e2c894442"
    const params = useParams();
    const symbol = params.symbol;
    const URL = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
    const [stock, setStock] = useState({});

    const getStock = async() => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setStock(data[0]);
        }   catch(err) {
            console.error(err)
        }
    };

    const checkPositive = (num) => {
        return num > 0 ? "green" : num < 0 ? "red" : ""
    }

    useEffect(() => {
        getStock()
    }, []);

    const loaded = () => {
        return (
            <main>
                <div>
                    <h1>{stock.name}</h1>
                    <h2>${stock.price} USD</h2>
                    <p><span className="bold">Change:</span> <span className={checkPositive(stock.change)}>{stock.change.toFixed(2)}</span></p>
                    <p><span className="bold">Daily High:</span> ${stock.dayHigh}</p>
                    <p><span className="bold">Daily Low:</span> ${stock.dayLow}</p>
                    <p className="back"><Link to="/stocks">Back</Link></p>
                </div>
            </main>
        )
    };

    const loading = () => {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    };

    return (
        stock && stock.price ? loaded() : loading()
    );
};