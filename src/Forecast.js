import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(){
    return (
      <div className="forecast">
        <div className="row forecast-days">
          <div className="col">
            <strong>Monday</strong>
          </div>
          <div className="col">
            <strong>Tuesday</strong>
          </div>
          <div className="col">
            <strong>Wednesday</strong>
          </div>
          <div className="col">
            <strong>Thursday</strong>
          </div>
          <div className="col">
            <strong>Friday</strong>
          </div>
        </div>
        <div className="row forecast-icons">
          <div className="col">
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"blue"}
              size={"50px"}
              animate={false}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon={"CLOUDY"}
              color={"grey"}
              size={"50px"}
              animate={false}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"blue"}
              size={"50px"}
              animate={false}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon={"RAIN"}
              color={"blue"}
              size={"50px"}
              animate={false}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon={"PARTLY_CLOUDY_DAY"}
              color={"yellow"}
              size={"50px"}
              animate={false}
            />
          </div>
        </div>
        <div className="row forecast-temp">
          <div className="col">
            <strong>17°C/13°C</strong>
          </div>
          <div className="col">
            <strong>16°C/12°C</strong>
          </div>
          <div className="col">
            <strong>18°C/14°C</strong>
          </div>
          <div className="col">
            <strong>17°C/12°C</strong>
          </div>
          <div className="col">
            <strong>18°C/11°C</strong>
          </div>
        </div>
      </div>
    );
}