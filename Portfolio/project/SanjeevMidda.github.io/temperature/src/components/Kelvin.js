import React from "react";
import "../styles.css";

export default function Kelvin(props){

    let conversion = props.userValue + 273.15;

    return(
        <div>
            <h1>KELVIN</h1>
            <h3>{conversion}</h3>
        </div>
    )
}