import React from "react"
import Data from "./data"
import Location from "./Location"
import Navbar from "./NavBar"
    
export default function App() {
    const location = Data.map(item => {
        return (
            <Location
                item={item}
            />
        )
    })        
    
    console.log(location)
    return(
        <div> 
            <Navbar /> 
            {location}
        </div>   
    )
}
