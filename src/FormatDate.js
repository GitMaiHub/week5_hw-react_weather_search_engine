import React from "react";
import "./FormatDate.css";

export default function FormatDate(props) {
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    return (
      <div className="FormatDate d-md-flex">
        <div className="date-stamp">
          {hours}:{minutes} {day}
        {" "}{date} {month} {year}</div>
      </div>
    );
}