let pages = [
  "anuncio1.html",
  "anuncio2.html"
];
let current = 0;
let RefreshTime = 5000;

let CurTime = 0;
let CurDay = 0;
let CurMinute = 0;


function init() {
  console.log('initializing...' + curTime + ':' + CurMinute + ' ' + CurDay );
  setInterval(refreshContent, RefreshTime);
}


function refreshContent() {
  if (pages[current] == null ) {
    current=0;
    console.log('initializing pages array');
  }

  if (curTime == "06" && CurDay == "2")
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
}
