import axios from "axios";
import { useEffect, useState } from "react"

const currencyListQuotesOptions = {
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/listquotes',
    headers: {
        'X-RapidAPI-Key': '036efebd32msh2648280e69e24eap1394fejsna389da4f0760',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};

const Currency = () => {

    const [currencies, setCurrencies] = useState([])
    const [fromCurrency, setFromCurrency] = useState("CAD")
    const [toCurrency, setToCurrency] = useState("INR")
    const [rate, setRate] = useState(0)
    const [amount, setAmount] = useState(0)

    const convertAmount = () => {
        
        const options = {
            method: 'GET',
            url: 'https://currency-exchange.p.rapidapi.com/exchange',
            params: {from: fromCurrency, to: toCurrency, q: amount},
            headers: {
              'X-RapidAPI-Key': '036efebd32msh2648280e69e24eap1394fejsna389da4f0760',
              'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            //   console.log(response.data);
              setRate(response.data)
          }).catch(function (error) {
              console.error(error);
          });
    }

    useEffect(() => {
        axios.request(currencyListQuotesOptions).then(res => {

            setCurrencies(res.data)

        }).catch(err => {
            alert("Only limited currencies available at the momemnt")
            setCurrencies(['EUR', 'USD', 'AUD', 'JPY', 'CNH', 'HKD', 'CAD', 'INR'])
        })
    }, [])
    return <>
        <h5>Currency Convertor</h5>

        <div>
            <div className="d-flex justify-content-between">
                <select className="form-select mx-3" aria-label="Default select example" onChange={(event) => {
                    setFromCurrency(event.target.value)                    
                }}>
                    <option defaultValue={fromCurrency}>Select From Currency</option>
                    {currencies.map((currency, index) => {
                        return <>
                        <option key={"value"+index} value={currency}>{currency}</option>
                        </>
                        
                    })}
                </select>

                <select className="form-select" aria-label="Default select example" onChange={(event) => {
                    setToCurrency(event.target.value)
                }}>
                    <option defaultValue={toCurrency}>Select From Currency</option>
                    {currencies.map(currency => {
                        return <>
                        <option value={currency}>{currency}</option>
                        </>
                        
                    })}
                </select>
            </div>

            <div className="text-center mt-4 mx-3 d-flex justify-content-around">
                <input type="number" required className="form-control w-50" placeholder="enter amount"  onChange={event => {
                    setAmount(event.target.value)
                }}/>
                
            </div>
            <div className="text-center mt-4">
                    <button className="btn btn-success" onClick={() => convertAmount()}>Convert</button>
                </div>

            {rate != 0 && <>
                    <div className="text-center mt-4">
                    <b>Calculated Amount : {(rate * amount).toFixed(2)}</b>
                </div>
            </>}
        </div>
    </>
}

export default Currency