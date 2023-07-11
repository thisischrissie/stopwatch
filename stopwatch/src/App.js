import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';
/*Import are wires that connect the components to the main app*/

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  const start = () => {
    run();
    setInterval(run, 10);
  };

  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const run = () => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
            <DisplayComponent time={time}/>
            <BtnComponent start={start}/> 
            {/* /*this is where the components close off. Must be before closing div tags!*/}
        </div>
      </div>
      
    </div>
  );
}

export default App;
