const div_poi = document.getElementById("list_poi")

const poi_div_temple = `<div class="card" style="width: 24%; margin: 5px 5px;">
<img src="%URL" class="card-img-top" alt="Falil"> <div class="card-body">`
const title_div_temple = `<h5 class="card-title">%NOME</h5>`
const taxt_temple = ` <p class="card-text">%TEXT</p>`

const button1_temple = `<button id="%NUM" class="btn btn-danger button_div"  data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>`
const button2_temple = `<button id="%NUM" class="btn btn-danger button_div">Remove</button>`

export const render_poi = (list_poi) => {
  let html = `<div class="row">`
  list_poi.forEach((poi, indi) => {
    if (indi % 4 === 0 && indi != 0) {
      html += `</div><div class="row"> `
    }
    html += poi_div_temple.replace("%URL", poi.img[0])
    html += title_div_temple.replace("%NOME", poi.nome) + "    " + poi.coordi + "<hr>"
    html += button1_temple.replace("%NUM", "button_" + poi.id.toString() + "_e") + " " +
      button2_temple.replace("%NUM", "button_" + poi.id.toString() + "_r")
    html += `</div></div>`
  })
  div_poi.innerHTML = html
  return
}