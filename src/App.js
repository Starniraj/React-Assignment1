import "./component/AssignMent1/style.css"
import FunctionComponent from "./component/AssignMent1/functionComponent";
import React, {useState} from "react";
import ClassComponent from "./component/AssignMent1/classComponent";
import './App.css';

function App() {
  const [display, setDisplay] = useState(false)
  const[displaySecond, setDisplaySecond] = useState(false)
  return (
    <div className="App">
      <h2>Styling using Functional and Class component</h2>
      <div className="flex">
        
         <div className="same" onClick={()=>setDisplay(!display)}>To style using function component</div>
         <div className='same' onClick={()=>setDisplaySecond(!displaySecond) }>To style using class component</div>
      </div>
      <div>

        <div className="toglle">
          {
            display?<div className="first">
              <FunctionComponent/>  
            </div>:null  }
            
            {
            displaySecond?<div className="first">
              <ClassComponent/>
            </div>:null  }
        </div>       
      </div>
     
    </div>
  );
}

export default App;
