import React from "react"

function Card(props){
    return(
    <div style={{backgroundColor: "burlywood"}}>
    <h2 style={{color: "aquamarine", backgroundColor: "blue", font: "georgia", fontSize: "40px", textAlign: "center"}}>{props.place} - ${props.price}</h2>
    <img alt="" style={{width: "50%", display: "block", marginLeft: "auto", marginRight:"auto"}}src={props.image}/>
    <p>{props.timeToGo}</p>
    <hr></hr>
    </div>
    )
}

export default Card