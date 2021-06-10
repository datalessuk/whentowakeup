import './App.css';
import React, { useState,useEffect } from 'react';
import Earth from './components/Earth'
import Clock from './components/Clock'
import Sleep from './components/Sleep'
import Links from './components/Links'
import Info from './components/Info'

function App(props) {

  const [time, setTime] = useState(new Date());
  
  function formatTime(time){
    let hours = time.getHours();
    //console.log(hours);
    let minutes = time.getMinutes();
    
    if(minutes <10){
      minutes = "0" + minutes;
    }

    let ampm = "am";
   
    if(hours >=12){
      ampm = "pm";
    }
  
    return hours + ":" + minutes + ""+ ampm;
  }

  const realTime = formatTime(time);

  const tick = ()=>{
    setTime(new Date());
  }

  useEffect(()=>{
    setInterval(tick,1000)

    return ()=>{
      clearInterval(tick)
    }
  },[realTime])

  
  return (
    <div className="App">
      <div>
      <Info />
      <Clock time={realTime} />
      <Earth />
      <Sleep />
      <Links />
      </div>
      
    </div>
  );
}

export default App;
