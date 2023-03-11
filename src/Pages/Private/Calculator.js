import { useState } from "react"

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setsecondNumber] = useState(0)
    const [operation, setOperation] = useState("")
    const [output, setOutput] = useState(0)

    const handleClick = (event) => {
        const clickedValue = event.target.innerHTML
        switch (clickedValue) {
            case "+":
                
                break;
        
            case "-":
                
                break;
        
            case "/":
                
                break;
            case "*":
                
                break;
            case "=":
                
                break;
            default:
                break;
        }
    }

    return <>
    <h3>Calculator</h3>
    <div>

        <div className="row mr-3">
            <input className="form-control " type="number" value={output}  />
        </div>
        
        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>1</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>2</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>3</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>+</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>4</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>5</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>6</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>-</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>7</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>8</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>9</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>*</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>/</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>0</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>=</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>clear</button>
        </div>
    </div>
    </>
}

export default Calculator