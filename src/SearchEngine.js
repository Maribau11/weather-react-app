import React from "react"

export default function SearchEngine(){
    return(
        <form>
            <input type="text" placeholder="Search a city"/>
            <input type="submit" value="Search"/>
            <input type="submit" value="Current"/>
        </form>
    )
}