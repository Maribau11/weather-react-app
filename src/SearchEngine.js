import React, { useState }from "react"
import CurrentWeather from "./CurrentWeather";
import Heading from "./Heading";

export default function SearchEngine(){
    let [city, setCity]= useState("");

    function handleSubmit(event){
        event.preventDefault();
        <Heading cityName={city}/>
    }

    function changeCity(event){
        event.preventDefault();
        setCity(event.target.value);
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Search a city"
          onChange={changeCity}
        />
        <input className="form-input" type="submit" value="Search" />
        <input className="form-input" type="submit" value="Current Location" />
      </form>
    );
}