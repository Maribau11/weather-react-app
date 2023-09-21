import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Heading(){
  return (
    <div className="heading">
      <div className="row">
        <div className="col">Cape Town</div>
        <div className="col">
          <ReactAnimatedWeather
            icon={"RAIN"}
            color={"blue"}
            size={"80px"}
            animate={true}
          />
        </div>
        <div className="col">21 September 2023 11:45am</div>
      </div>
    </div>
  );
}