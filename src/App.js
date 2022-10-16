import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";
import "./App.css";
import maicon from "./maicon.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine defaultCity="Seattle" />
      </div>
      <footer>
        Open-sourced on <a href="https://github.com/GitMaiHub/week5_hw-react_weather_search_engine" title="View this project on GitHub(external" target="_blank" rel= "noreferrer" className="links">GitHub</a> and hosted on <a href="https://app.netlify.com/sites/tiny-trifle-5ef3ce/overview" title="View this project on Netlify(external)" target="_blank" rel="noreferrer" className="links">Netlify</a>
        <p>
          <img src={maicon} alt="maicon" width={40} />
        Coded by <a href="https://frolicking-dieffenbachia-8704e5.netlify.app" title="Mai's portfolio" target="_blank" rel="noreferrer" className="links">Mai Carlton</a>
        </p>
      </footer>
    </div>
  );
}
