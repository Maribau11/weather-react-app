import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Heading(props){
  let [city,setCity] = useState("Cape Town");
  
    return (
      <div className="heading">
        <div className="row">
          <div className="col">{props.cityName}</div>
          <div className="col">Current Weather Icon</div>
          <div className="col">Current Date</div>
        </div>
      </div>
    );
}