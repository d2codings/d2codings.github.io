const startTime = document.getElementById("time");

function newTime() {
    date1 = new Date("2022-04-18");
    date2 = new Date();

    diffDate = date2.getTime() - date1.getTime();

    dateDays = Math.abs(diffDate / (1000 * 3600 * 24));

    dateDays = Math.floor(dateDays);
};

function showTime() {
    newTime();
    startTime.innerHTML = `${dateDays} 일`;
};

function init() {
    showTime();
    setInterval(showTime, 1000);
};

init();
