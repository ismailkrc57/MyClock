const hour = document.getElementById("clock-hour"),
  minutes = document.getElementById("clock-minutes"),
  seconds = document.getElementById("clock-seconds");
const mysaat = document.getElementById("mysaat"),
  mydakika = document.getElementById("mydakika"),
  mysaniye = document.getElementById("mysaniye");

const clock = () => {
  let date = new Date();
  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
  mysaat.innerText = `${date.getHours()}`;
  mydakika.innerText = `${date.getMinutes()}`;
  mysaniye.innerText = `${date.getSeconds()}`;
};

setInterval(clock, 1000);
