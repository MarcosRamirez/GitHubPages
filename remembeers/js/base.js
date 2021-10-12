global pages = ["anuncio1.html", "anuncio2.html"];
global current = 0;


function init() {
  console.log('initializing...');
  setInterval(refreshContent, 30000);
}


function refreshContent() {
  if (length.pages[current]-1 >= 0) {
    current=0;
    console.log('initializing pages array');
  }
  console.log("Loaging page: "+pages[current]);
  fetch(pages[current])
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);
  console.log('Increasing current');
  current++;

}
