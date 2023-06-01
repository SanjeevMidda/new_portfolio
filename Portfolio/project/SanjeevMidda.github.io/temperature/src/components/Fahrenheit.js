import React from "react";
import "../styles.css";

export default function Fahrenheit(props){

    let conversion = (props.userValue * 1.8) + 32;

    return(
        <div >
            <h1>FAHRENHEIT</h1>
            <h3>{conversion.toFixed(2)}</h3>
        </div>
    )
}