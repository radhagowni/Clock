//a function called UpdateClock is written to retrieve current hours, minutes, seconds and to display them as well.
function UpdateClock(){
    // below line is to get current date
    const now=new Date();
    let hours=now.getHours();
    const meridiem=hours>=12?"PM":'AM';
    hours=hours%12 ||12;
    hours=hours.toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent=timeString;
}
UpdateClock();
setInterval(UpdateClock,1000);

