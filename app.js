'use strict'

setInterval(() => {
    // new data
    let d = new Date();
    // current houre
    let htime = d.getHours();
    // current minute
    let mtime = d.getMinutes();
    // current sec
    let stime = d.getSeconds();
    // formala for rotation
    let hrotation = 30 * htime + (mtime / 2);
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;
    // element variables
    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')
    // style for rotation
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
