import React,{useState} from "react"
import Weather from "./Weather";

export default function CurrentWeather(){

    return (
      <div className="row">
        <div className="col">
          <div>
            <span className="currentTemp">15</span>
            <span className="degree-C">
              <a>°C</a>
            </span>
            <span className="degree-f">
              <a>°F</a>
            </span>
          </div>
        </div>
        <div className="col">
          <Weather/>
        </div>
      </div>
    );
}