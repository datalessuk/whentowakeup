function formatTime(time){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    
    if(minutes <10){
      minutes = "0" + minutes;
    }

    var ampm = "am";
   
    if(hours >10){
      hours -= 12;
      ampm = "pm";
    }
    return hours + ":" + minutes + " "+ ampm;
  }