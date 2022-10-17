import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";
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
    <div className="col-md-6">
        <WeatherIcon code={props.data.icon} />
<TemperatureConversion fahrenheit={props.data.temperature} />
    </div>
    <div className="col-md-6">
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