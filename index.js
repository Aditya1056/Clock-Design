setInterval(setclock, 1000);

const week_days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const months = ["January","February","March","April","May","June","July","August",
                "September","October","November","December"];

let htime, mtime, stime, weekDay, dt, year, month;

hours = document.getElementById("hour_id");
minutes = document.getElementById("min_id");
seconds = document.getElementById("sec_id");

day = document.querySelector(".day");
digital_time = document.querySelector(".digital-time");
date_ele = document.querySelector(".date");

mode_btn = document.querySelector(".slider");


mode_btn.addEventListener('click', (event)=>{

    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    
    document.querySelector(".nav-bar").classList.toggle("nav-bar-light");
    document.querySelector(".nav-bar").classList.toggle("nav-bar-dark");
    
    document.querySelector(".clock").classList.toggle("clock-light");
    document.querySelector(".clock").classList.toggle("clock-dark");

    document.querySelector(".center").classList.toggle("center-light");
    document.querySelector(".center").classList.toggle("center-dark");

    document.querySelector(".seconds-hand").classList.toggle("seconds-hand-light");
    document.querySelector(".seconds-hand").classList.toggle("seconds-hand-dark");

    document.querySelector(".digital").classList.toggle("digital-light");
    document.querySelector(".digital").classList.toggle("digital-dark");


});


function setclock() {
    
    date = new Date();
    
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    
    let h_rotation = (htime*30) + (mtime/2);
    let m_rotation = (mtime*6) + (stime/10);
    let s_rotation = stime*6;
    
    hours.style.transform = `rotate(${h_rotation}deg)`;
    minutes.style.transform = `rotate(${m_rotation}deg)`;
    seconds.style.transform = `rotate(${s_rotation}deg)`;

    weekDay = date.getDay();
    dt = date.getDate();
    dt = dt<10 ? '0'+dt : dt;
    year = date.getFullYear();
    mnth = date.getMonth();

    var ampm = htime>=12 ? "PM" : "AM";

    htime = htime%12;
    htime = htime ? htime : 12;
    htime = htime<10 ? '0'+htime : htime;
    mtime = mtime<10 ? '0'+mtime : mtime;
    stime = stime<10 ? '0'+stime : stime;
    console.log(weekDay);

    day.innerHTML = week_days[weekDay];
    digital_time.innerHTML = htime + ':' + mtime + ':' + stime + ' ' + ampm;
    date_ele.innerHTML = dt + ' ' + months[mnth] + ' ' + year;

}

setclock();


