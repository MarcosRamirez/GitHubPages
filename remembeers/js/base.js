let pages = ["anuncio1.html", "anuncio2.html"];
let current = 0;


function init() {
  setInterval(refreshContent, 30000);
}


function refreshContent() {
  if (length.pages[current]-1 >= 0) {
    let current=0;
  }
  fetch(pages[current])
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);

}
