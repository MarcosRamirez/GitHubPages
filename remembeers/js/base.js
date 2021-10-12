let pages = [
  "anuncio1.html",
  "anuncio2.html"
];

let closeHours = [
  '07', // Sunday
  '07',
  '07',
  '07',
  '07',
  '07',
  '07'
]
let current = 0;
let RefreshTime = 5000;

let CurTime = 0;
let CurDay = 0;
let CurMinute = 0;


function init() {
  getCurrentTime();
  console.log('initializing...' + CurTime + ':' + CurMinute + ' ' + CurDay );
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
