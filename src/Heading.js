import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Heading(){
    return (
      <div className="heading">
        <div className="row">
          <div className="col">City Name</div>
          <div className="col">Current Weather Icon</div>
          <div className="col">Current Date</div>
        </div>
      </div>
    );
}