let template = `<div id="b%id" class="space">
<button class="desc-butt btn btn-danger" id="%id">%nome</button>
<div id='desc%id' class='d-none'>%descrizione</div>
</div>`;
let url= 'href="https://point-of-interest-docente-5binf-tpsi-2023-2024-2.docente-5binf-tpsi-2023-2024.repl.co/progetto_sito/utente_base/POI.html?id=%ID';
const div_elenco = document.getElementById("elenco");

export const crea_poi = (list_poi) => {
  for (let i = 0; i < list_poi.length; i++) {
    let html = template.replaceAll("%id", list_poi[i].id);
    html = html.replace("%nome", list_poi[i].nome);
    html = html.replace("%descrizione", list_poi[i].descri);
    div_elenco.innerHTML += html;
  }
  const button_list=document.querySelectorAll(".desc-butt");
  console.log(button_list);
  for(let z=0;z<button_list.length;z++){
    button_list[z].addEventListener("click",()=>{
      console.log(button_list[z].id);
      url = url.replace("%ID", button_list[z].id);
      window.location.replace("POI.html?id="+button_list[z].id);
    })
      
  }
    
}
