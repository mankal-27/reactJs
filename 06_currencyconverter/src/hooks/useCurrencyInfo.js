import { useEffect, useState } from "react";

const url = 'https://currency-converter5.p.rapidapi.com/currency/historical/2020-01-20?from=EUR&amount=1&format=json&to=GBP';
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
        .then((res) => res.json)
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    return data
} 

export default useCurrencyInfo;