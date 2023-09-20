import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast(){
    return (
      <div className="forecast">
        <div className="row forecast-days">
          <div className="col">Monday</div>
          <div className="col">Tuesday</div>
          <div className="col">Wednesday</div>
          <div className="col">Thursday</div>
          <div className="col">Friday</div>
        </div>
        <div className="row forecast-icons">
          <div className="col">Monday</div>
          <div className="col">Tuesday</div>
          <div className="col">Wednesday</div>
          <div className="col">Thursday</div>
          <div className="col">Friday</div>
        </div>
        <div className="row forecast-temp">
          <div className="col">Monday</div>
          <div className="col">Tuesday</div>
          <div className="col">Wednesday</div>
          <div className="col">Thursday</div>
          <div className="col">Friday</div>
        </div>
      </div>
    );
}