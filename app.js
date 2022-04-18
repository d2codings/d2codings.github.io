const startTime = document.getElementById("time");

function showTime() {
    date1 = new Date("2022-04-18");
    date2 = new Date();
    diffDate = date2.getTime() - date1.getTime();
    dateDays = Math.abs(diffDate / 1000);
    dateDays = Math.floor(dateDays);
    startTime.innerHTML = `${dateDays} 초`;
};

showTime();
setInterval(showTime, 1000);
