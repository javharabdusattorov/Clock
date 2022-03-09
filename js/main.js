let elHour = document.querySelector('.hour');
let elMinute = document.querySelector('.minute');
let elSecond = document.querySelector('.second');
let elYear = document.querySelector('.year');
let elMonth = document.querySelector('.month');
let elDay = document.querySelector('.day');

function clock() {
    
    // Clock
    let time = new Date()   ;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // Date
    let years = time.getFullYear();
    let month = time.getMonth() + 1;
    let days = time.getDate();

    elHour.innerHTML = hours;
    elMinute.innerHTML = minutes;
    elSecond.innerHTML = seconds;

    if(minutes <= 9) {
        elMinute.innerHTML = `0${minutes}`;
    } else {
        elMinute.innerHTML = minutes;
    }

    if(seconds <= 9) {
        elSecond.innerHTML = `0${seconds}`;
    } else {
        elSecond.innerHTML = seconds;
    }

    if(hours <= 9) {
        elHour.innerHTML = `0${hours}`;
    } else {
        elHour.innerHTML = hours;
    }
    
    elYear.innerHTML = years;
    elMonth.innerHTML = month;
    elDay.innerHTML = days;
    setTimeout( () => clock(), 1000);

    if(month <= 9) {
        elMonth.innerHTML = `0${month}`;
    } else {
        elMonth.innerHTML = month;
    }

    if(days <= 9) {
        elDay.innerHTML = `0${days}`;
    } else {
        elDay.innerHTML = days;
    }
}
clock();