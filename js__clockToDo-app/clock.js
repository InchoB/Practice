const clockContainer = document.querySelector('js-clock'),
    clockTitle = document.querySelector('p'),
    clockTitleAmPm = document.querySelector('.am'),
    clockTitleSpan = document.querySelector('.sec');
console.log(clockTitleSpan);

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    clockTitleSpan.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    setInterval(getTime, 0);
}

init();
