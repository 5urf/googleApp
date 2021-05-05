const clockContainer = document.querySelector(".js-clock"),
clockTtile = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTtile.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}
init();