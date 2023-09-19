import React, { useState }from "react"
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(){
    let [city, setCity]= useState("");
    let [showInfo, setShowInfo]=useState(false);

    function handleSubmit(event){
        event.preventDefault();
        setShowInfo(true);
    }

    function changeCity(event){
        event.preventDefault();
        setCity(event.target.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search a city" onChange={changeCity}/>
            <input type="submit" value="Search"/>
            {showInfo && <CurrentWeather/>}
        </form>
    )
}