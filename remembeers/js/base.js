let pages = [
  "anuncio1.html",
  "anuncio2.html"
];
let current = 0;
let RefreshTime = 5000;

function init() {
  console.log('initializing...');
  setInterval(refreshContent, RefreshTime);
}


function refreshContent() {
  if (length.pages[current] == null ) {
    current=0;
    console.log('initializing pages array');
  }
  console.log("Loaging page: " + pages[current]);
  fetch(pages[current])
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);
  console.log('Increasing current');
  current++;

}
