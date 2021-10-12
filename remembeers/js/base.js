let pages = [
  "anuncio1.html",
  "anuncio2.html"
];

let closeHours = [
  '11', // Sunday
  '11',
  '11',
  '11',
  '11',
  '11',
  '11'
]
let current = 0;
let RefreshTime = 5000;

let CurTime = 0;
let CurDay = 0;
let CurMinute = 0;
let BackgroundColor = 1;
let mainInterval = 0;

function init() {
  getCurrentTime();
  console.log('initializing...' + CurTime + ':' + CurMinute + ' ' + CurDay);
  refreshContent();
  mainInterval = setInterval(refreshContent, RefreshTime);
}


function refreshContent() {
  if (pages[current] == null ) {
    current=0;
    console.log('initializing pages array');
  }

  //if (CurTime == closeHours[CurDay]-1) {
  if (CurTime == 11) {

    console.log('CloseTime!!');
    console.log('Flashing!!');
    RefreshTime = 3600000;
    pages = ["closing.html"];
    fetch(pages[current])
    .then(data => data.text())
    .then(html => document.getElementById('content').innerHTML = html);
    console.log('Increasing current');

    var intervalId = setInterval(flashScreen, 300);
    console.log('close id: '+intervalId);
    setTimeout(clearInterval(intervalId), 150000);
    clearInterval(mainInterval);

    var duration = 60 * 30,
    display = document.querySelector('#EndService');
    countDown(duration, display);

    var duration = 60 * 60,
    display = document.querySelector('#CloseTime');
    countDown(duration, display);

    console.log('Display: ' + display);

  }
  console.log("Loaging page: " + pages[current]);
  fetch(pages[current])
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);
  console.log('Increasing current');
  current++;

}


function getCurrentTime() {
  now = new Date();
  CurDay = now.getDay();
  CurTime = now.getHours();
  CurMinute = now.getMinutes();

  if (CurTime < 10) CurTime = '0'+CurTime;
}

function flashScreen () {
  if (BackgroundColor === 1) {
      color = "#000";
      BackgroundColor = 2;
  } else {
      color = "#fff";
      BackgroundColor = 1;
  }

  document.body.style.background = color;

}

function countDown(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.textContent = minutes + ":" + seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
