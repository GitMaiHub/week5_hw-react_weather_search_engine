import React from "react";
import FormatDate from "./FormatDate"
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
<h1>
    {props.data.name}
</h1>
<h3>
<FormatDate date={props.data.date} />
</h3>

<div className="row mt-4">
    <div className="col-md-5">
<img src="http://openweathermap.org/img/wn/${props.data.icon}@2x.png" alt={props.data.description} />
<span>{props.data.temperature}<a href="/" className="unit">°C</a> | <a href="/" className="unit">°F</a></span>
    </div>
    <div className="col-md-7">
<ul>
    <li className="text-capitalize">
        {props.data.description}
    </li>
    <li>
        Humidity: {props.data.humidity}%
    </li>
    <li>
        Wind: {props.data.wind}mph
    </li>
</ul>
    </div>
</div>
        </div>
    )
}