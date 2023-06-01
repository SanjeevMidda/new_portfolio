import React from "react";
import "../styles.css";

export default function Rankine(props){

    let calculation = (props.userValue * 9 / 5) + 491.67
    return(
        <div>
            <h1>RANKINE</h1>
            <h3>{calculation}</h3>
        </div>
    )
}