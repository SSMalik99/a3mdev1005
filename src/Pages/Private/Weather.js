import axios from "axios"
import { useState } from "react"

const Weather = () => {
    const [latLong, setLatLong] = useState({lat:null, long :null})
    const [data, setData] = useState(null)

    

    // get current lat long

    navigator.geolocation.getCurrentPosition(postition => {
        setLatLong({lat: postition.coords.latitude.toString(), long: postition.coords.longitude.toString()})
        
    })

    const getWeatherReport = async (event) => {
        event.preventDefault()
        
        let ApiLatLongURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLong.lat}&lon=${latLong.long}&appid=67cd7013531d6479e7562cc5c07770f4`
        console.log(data, ApiLatLongURL)
        axios.get(ApiLatLongURL).then(data => {
            
            setData(data.data)
        })

        console.log(data)
       

    }
    return <>
        <h5>Weather</h5>    

        <div className="p-5">
            <div className="card">
                <div className="card-body">

                    {data && <>
                        <div className=" content-center text-center">
                            <div className="text-lg">Weather: <span>{data.weather[0].main}</span></div>
                            <div className="text-lg">Weather Description: <span>{data.weather[0].description}</span></div>
                            <div className="text-lg">Temperature(°F): <span>{data.main.temp}</span></div>
                            <div className="text-lg">Feels Like(°F): <span>{data.main.feels_like}</span></div>
                            <div className="text-lg">Humidity: <span>{data.main.humidity}</span></div>
                            <div className="text-lg">visibility: <span>{data.visibility}</span></div>
                    

                </div>
                    </>}
                    <div className="text-center">
                    <button className="btn btn-lg btn-outline-success" onClick={event => getWeatherReport(event)}>Get Weather</button>
                    </div>
                </div>                
            </div>
        </div>
    </>
}

export default Weather