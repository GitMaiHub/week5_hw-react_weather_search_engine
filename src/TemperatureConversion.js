import React, { useState } from "react";
import "./TemperatureConversion.css";
export default function TemperatureConversion(props) {
const [unit, setUnit] = useState("fahrenheit");

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}
function showFahrenheit(event) {
  event.preventDefault();
  setUnit("fahrenheit");
}

if (unit === "fahrenheit") {
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          °F |{" "}
          <a href="/" className="unit"onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
} else {
    let celsius = ((props.fahrenheit)-32) * 5 / 9;
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="units">
          <a href="/" className="unit" onClick={showFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
}
}