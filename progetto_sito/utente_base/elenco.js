let template = `<div id="%id">
<button class="desc-butt">%nome</button>
<div id='desc%id' class='d-none'>%descrizione</div>
</div>`;
const div_elenco = document.getElementById("elenco")

export const crea_poi = (list_poi) => {
  for (let i = 0; i < list_poi.length; i++) {
    let html = template.replaceAll("%id", list_poi[i].id)
    html = html.replace("%nome", list_poi[i].nome);
    html = html.replace("%descrizione", list_poi[i].descri);
    div_elenco.innerHTML += html;
  }
}