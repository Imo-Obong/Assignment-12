var Name = prompt("What is your name?");
var x;
var today = new Date();
var day = today.getDay();
var Weekdays = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();

if (hour < 12 ){
    x = "am";
    hour -=12;
}

else if (hour == 12){
    hour = hour;
    x = "pm"
}

else  {
    x = "pm"
    // hour = hour-12;
    hour -=12;
}
alert(`Hello ${Name},  Today is ${daylist[day]} and the time is ${hour}:${minute} ${x}. `);


