//date
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")
const weeks=document.getElementById("weeks")

//time
const hour=document.getElementById("hour")
const minites=document.getElementById("minites")
const second=document.getElementById("second")
const ampm=document.getElementById("ampm")

function timeDate()
{
    const dateTime=new Date();
    //date
    d=dateTime.getDate();
    m=dateTime.getMonth()+1;
    y=dateTime.getFullYear();
    const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const wkn=days[dateTime.getDay()];
    //time
    hr=dateTime.getHours(12);
    min=dateTime.getMinutes();
    sec=dateTime.getSeconds();
    if(hr > 12)
    {
        hr - 12;
        ampm.innerHTML="PM";
    }
    else
    {
        ampm.innerHTML="AM";
    }

    day.innerHTML=d < 10 ? "0"+ d : d;
    month.innerHTML=m <10 ?  "0"+ m : m;
    year.innerHTML=y < 10 ? "0"+ y : y;
    weeks.innerHTML=wkn
    hour.innerHTML=hr < 10 ? "0"+ hr : hr;
    minites.innerHTML=min < 10 ? "0"+ min : min;
    second.innerHTML=sec < 10 ? "0"+ sec : sec;
}
setInterval(timeDate,1000)