import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./SearchEngine.css";
export default function SearchEngine(props) {
    const [weather, setWeather] = useState({ load: false })
    const [city, setCity] = useState(props.defaultCity);

function displayWeather(response) {
setWeather({
    load: true,
    name: response.data.name,
    date: new Date(response.data.dt * 1000),
    icon: response.data.weather[0].icon,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
})
}

function search() {
    let units = "imperial";
    const apiKey = "eb2ee96fce77dd8a4eaad97e550c01d8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}
function updateCity(event) {
setCity(event.target.value)
}

if (weather.load) {
 return (
   <div className="SearchEngine">
     <form onSubmit={handleSubmit}>
       <div className="row">
         <div className="col-md-9">
           <input
             type="search"
             placeholder="Enter a city..."
             className="form-control"
             onChange={updateCity}
           />
         </div>
         <div className="col-md-3 d-grid d-md-block">
           <input type="submit" value="Search" className="btn btn-success" />
         </div>
       </div>
     </form>
     <WeatherInfo data={weather} />
   </div>
 );
} else {
     search()
    return (
       "Loading..."
    )
}

   
}