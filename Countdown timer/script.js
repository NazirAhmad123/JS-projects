const dayElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minuteElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
// Set the date we're counting down to
const countDownDate = new Date("1 Jan 2022").getTime();

const countdown = () => {
    // Get today's date and time
    const now = new Date().getTime();

    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayElement.innerHTML = days
    hoursElement.innerHTML = formatTime(hours)
    minuteElement.innerHTML = formatTime(minutes)
    secondsElement.innerHTML = formatTime(seconds)
    
    
    console.log(dayElement)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown()
setInterval(countdown, 1000)