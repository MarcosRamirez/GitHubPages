let pages = [
  "anuncio1.html",
  "anuncio2.html"
];

let closeHours = [
  '08', // Sunday
  '08',
  '08',
  '08',
  '08',
  '08',
  '08'
]
let current = 0;
let RefreshTime = 5000;

let CurTime = 0;
let CurDay = 0;
let CurMinute = 0;


function init() {
  getCurrentTime();
  console.log('initializing...' + CurTime + ':' + CurMinute + ' ' + CurDay);
  refreshContent();
  setInterval(refreshContent, RefreshTime);
}


function refreshContent() {
  if (pages[current] == null ) {
    current=0;
    console.log('initializing pages array');
  }

  if (CurTime == closeHours[CurDay]-1) {
    console.log('CloseTime!!');
    console.log('Flashing!!');
    setInterval(flashScreen, 300);
    setTimeout(clearInterval(flashScreen), 1500);
    RefreshTime = 3600000;
    pages = ["closing.html"];
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
  if (x === 1) {
      color = "#000";
      x = 2;
  } else {
      color = "#fff";
      x = 1;
  }

  document.body.style.background = color;

}
