import React, { useState } from "react";

export default function TemperatureConversion(props) {
const [unit, setUnit] = useState("fahrenheit");
function showFahrenheit(event) {
    event.preventDefault();
setUnit("fahrenheit");
}
function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "fahrenheit") {
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span>
          °C |{" "}
          <a href="/" className="unit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
} else {
    let celsius = (props.fahrenheit-32)*5/9;
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span>
          <a href="/" className="unit" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
}
}