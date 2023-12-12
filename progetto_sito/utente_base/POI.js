import { recupero } from "/progetto_sito/file.js"

const div_descrizione = document.getElementById("dettagli_poi");

const div_carosel = document.getElementById("img_item")
const temple_carosello = `
  <div class="carousel-item %ACTIVE">
      <img class="d-block w-100" src=%URL alt="%POSITION slide">
  </div>`

const templete_poi =
  `<h1>%TITOLO</h1>
  <div id="descrizione">%DESCRIZIONE</div>`

const dati_callback = (val) => {
  let list_poi = JSON.parse(val.result)
  console.log(list_poi)
  let url_page = new URLSearchParams(window.location.search)
  let id = parseInt(url_page.get("id"))
  let poi = list_poi.find(p => p.id === id)
  render_poi(poi)
  render_carosello(poi.img)
  console.log(poi)
}
const render_poi = (poi) => {
  let html2 = templete_poi
  html2 = html2.replace("%TITOLO", poi.nome).replace("%DESCRIZIONE", poi.descri)
  div_descrizione.innerHTML = html2

}

const render_carosello = (imgs) => {
  let html = ""
  imgs.forEach((img, indi) => {
    if (indi === 0) {
      html += temple_carosello.replace("%ACTIVE", "active")
    } else {
      html += temple_carosello.replace("%ACTIVE", "")
    }
    html = html.replace("%URL", img).replace("%POSITION", indi + 1)
  })
  div_carosel.innerHTML = html
}

recupero(dati_callback)


