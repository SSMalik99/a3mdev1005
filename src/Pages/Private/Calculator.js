import { useState } from "react"

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setsecondNumber] = useState(0)
    const [operation, setOperation] = useState("")
    const [output, setOutput] = useState(0)
    const [firstValueAdded, setFirstValueAdded] = useState(false)

    const handleClick = (event) => {

        let clickedValue = event.target.innerHTML
        let operatioins = ["+", "-", "*", "/", "="]
        if (clickedValue) {
            setOutput(firstNumber+secondNumber)
        }
        if(operatioins.includes(clickedValue)) {
            if (!firstValueAdded) {
                setFirstValueAdded(true)
            }
            
            setOperation(clickedValue)

        }else {

            if(!firstValueAdded){
                
                firstNumber == 0 ? setFirstNumber(clickedValue)  : setFirstNumber(firstNumber.toString()+clickedValue)
                setOutput(firstNumber)
                
                
            }else{

                secondNumber == 0 ?  setsecondNumber(clickedValue): setsecondNumber(secondNumber.toString() + clickedValue)
                setOutput(parseInt(secondNumber))
            }
        }

        console.log(firstNumber, secondNumber, operation)
    }

    return <>
    <h3>Calculator</h3>
    <div className="card p-5">

        <div className="row mr-3">
            <input className="form-control text-end " defaultValue={output} type="text"  />
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