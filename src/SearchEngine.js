import React, { useState }from "react"

export default function SearchEngine(){

    function handleSubmit(event){
        event.preventDefault();
  
    }

    function changeCity(event){
        event.preventDefault();
        
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