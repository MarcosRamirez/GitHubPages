function init() {
  refreshContent('anuncio1.html');
}

function refreshContent(content) {
  fetch(content)
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);

}
