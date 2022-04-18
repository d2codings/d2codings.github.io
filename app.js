const startTime = document.getElementById("start-time");
const endTime = document.getElementById("end-time");

let toDay = new Date();

const year = 2022;
const month = 4;
const date = 18;

const hours = 17;
const minutes = 6;
const seconds = 0;

let newYear = toDay.getFullYear(); 

let newMonth = toDay.getMonth() + 1;

let newDate = toDay.getDate();

let newHours = toDay.getHours();

let newMinutes = toDay.getMinutes();

let newSeconds = toDay.getSeconds();

startTime.innerHTML = `${newYear-year}년 ${newMonth-month}월 ${newDate-date}일`;
endTime.innerHTML = `${newHours-hours}시 ${newMinutes-minutes}분 ${newSeconds-seconds}초`;

setInterval(function() {
    toDay = new Date();

    let newYear = toDay.getFullYear(); 

    let newMonth = toDay.getMonth() + 1;

    let newDate = toDay.getDate();

    let newHours = toDay.getHours();

    let newMinutes = toDay.getMinutes();

    let newSeconds = toDay.getSeconds();

    startTime.innerHTML = `${newYear-year}년 ${newMonth-month}월 ${newDate-date}일`;
    endTime.innerHTML = `${newHours-hours}시 ${newMinutes-minutes}분 ${newSeconds-seconds}초`;
}, 1000);
