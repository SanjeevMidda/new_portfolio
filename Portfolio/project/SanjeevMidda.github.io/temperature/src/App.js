import React, {useState} from "react";
import "./styles.css";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";
import Rankine from "./components/Rankine";

function App() {

  const [userInput, setUserInput] = useState(0);

  function updateUserInput(e){
    setUserInput(e.target.value);
  }

  return (
    <div className="layout">
      <div className="inner">
        <input onChange={updateUserInput} value ={userInput}></input>

        <div>
          <Fahrenheit userValue = {userInput}/>
          <Kelvin userValue = {userInput}/>
          <Rankine userValue = {userInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
