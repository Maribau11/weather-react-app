import React from "react"
import Weather from "./Weather";

export default function CurrentWeather(){

    return (
      <div className="row">
        <div className="col">
          <div>
            <span className="currentTemp">15</span>
            <span className="degree-C">
              <button>°C</button>
            </span>
            <span className="degree-f">
              <button>°F</button>
            </span>
          </div>
        </div>
        <div className="col">
          <Weather />
        </div>
      </div>
    );
}