import React from "react"

export default function Location(props){
    return(
        <div className = "location--div">
            <img src ={props.item.imageUrl} className = "location--img"/> 
            <div className = "location--info">
            <div className = "location--header">  
            <div className = "location--top">
            <h3 className = "location--place"> {props.item.location} </h3> 
            <a href = {props.item.googleMapsUrl}  className = "location--url"> View on Google Maps</a>
            </div>
            <h1 className = "location--title"> {props.item.title} </h1> 
            </div> 
            <p className = "location--date"> <strong> {`${props.item.startDate} - ${props.item.endDate}`} </strong> </p>
            <p className = "location--description"> {props.item.description} </p>
            </div> 
        </div>
    )
}