import { min } from 'moment';
import React, { useState,useEffect } from 'react';
import '../styles/Sleep.css'
//import '../scripts/formatTime.js'


function Sleep(props){
    const [time, setTime] = useState(new Date());
    //const time = new Date();  
  
    function formatTime(time){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    
    if(minutes <10){
      minutes = "0" + minutes;
    }

    let ampm = "am";
   
    if(hours >10){
      hours -= 12;
      ampm = "pm";
    }
    return hours + ":" + minutes + ""+ ampm;
  }

  function addTime(time,minutes){
    let newDate = new Date(time)
    
    newDate.setMinutes(time.getMinutes() + minutes)
    return newDate;
  }

  //7 + 15 good night sleep 420 + 15
  //8+15 best night sleep  480 + 15
  
 
    const timePlusSeven = addTime(time,435);
    const finalTimeSeven = formatTime(timePlusSeven);
    

    const timePlusEight = addTime(time,495);
    const finalTimeEight = formatTime(timePlusEight)

    //console.log(finalTime);
     


    return(
        <div className="sleep-container">
            <h4>{finalTimeSeven}</h4>
            <span className="Orange-underLine"></span>
            <h4>{finalTimeEight}</h4>
            <span className="Green-underLine"></span>
        </div>
    )
}
export default Sleep;
