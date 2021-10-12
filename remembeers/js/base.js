pages = ["anuncio1.html", "anuncio2.html"];
current = 0;


function init() {
  setInterval(refreshContent, 30000);
}


function refreshContent() {
  if (length.pages[current]-1 >= 0) {
    current=0;
  }
  fetch(pages[current])
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);

  current++;

}
