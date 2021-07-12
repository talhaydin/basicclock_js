

setInterval(showTime, 1000);

      function showTime(){
        let time = new Date();
        let hr = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let day = time.getDay();
        let dayarr = ["Sunday","Monday","Tuesday","Wednesday","Thurdsay","Friday","Saturday"];
        day = dayarr[day];

      hr = hr < 10 ? "0" + hr : hr;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      let currentTime = '"' +  hr + ":" + min + ":" + sec + " " + day + '"';

      document.getElementById('clock').innerHTML = currentTime;

    }
    showTime();