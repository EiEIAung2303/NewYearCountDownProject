const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");

//2020
const currentYear = new Date().getFullYear();
//countdown time with string template
const newYearTime = new Date(`December 26 2020 19:37:00`);
let audio = new Audio("./audio/audio.mp3");

//display this year in DOM
year.innerText = currentYear;
let check = 0;
function updateCountDown() {
  const currentTime = new Date();

  // console.log(currentTime)
  const diff = (newYearTime - currentTime) / 1000;

  if (Math.floor(diff) <= 0) {
    check++;
    if (check <= 1) {
      audio.play();
    }
      seconds.innerHTML = '00'
  } else {
    const d = Math.floor(diff / 60 / 60 / 24);
    const h = Math.floor(diff / 60 / 60) % 24;
    const m = Math.floor(diff / 60) % 60;
    const s = Math.floor(diff) % 60;

    //To Display Days, Hours, Minutes, Seconds
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  }
}

//when loading, clear html
//After 1s, apper html
setTimeout(() => {
  //to remove html
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

//Set to change times in DOM using setInterval with updateCOuntDown
setInterval(updateCountDown, 1000);
