import React from "react"

export default function CurrentWeather(){
    return (
      <div className="row">
        <div className="col">
          <div>
            <span className="currentTemp">Current Temperature</span>
            <span className="degree-C">
              <a>°C</a>
            </span>
            <span className="degree-f">
              <a>°F</a>
            </span>
          </div>
        </div>
        <div className="col">
          <p className="info">humidity</p>
          <p className="info">wind speed</p>
          <p className="info">High/low</p>
          <p className="info">Precipitation</p>
        </div>
      </div>
    );
}