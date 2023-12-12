import { recupero } from "/progetto_sito/file.js"
let a
let list_url = []
let list_id = []
let poi
const name_a = document.getElementById("name_a")
const lat_a = document.getElementById("lat_a")
const lon_a = document.getElementById("lon_a")
const description_a = document.getElementById("textarea_a")
const urlimg = document.getElementById("imgurl")
const add_but = document.getElementById("add_img")
const div_num_img = document.getElementById("num_img")
const img_a = document.getElementById("img_a")

const name_m = document.getElementById("name_m")
const lat_m = document.getElementById("lat_m")
const lon_m = document.getElementById("lon_m")
const description_m = document.getElementById("textarea_m")
const div_img = document.getElementById("img_container")

const img_m_templete = `<img src="%URL" alt="..." class="img-thumbnail img_div">`

const dati_callback = (val) => {
  let list_poi = JSON.parse(val.result)
  list_id = list_poi.map(p => p.id)

}
recupero(dati_callback)

export const modelgesture_add = () => {
  a = Math.max(...list_id) + 1
  let hash = a
  //console.log(hash)
  poi = {
    id: hash, nome: name_a.value, coordi: [parseFloat(lat_a.value), parseFloat(lon_a.value)], descri: description_a.value, img: list_url
  }
  name_a.value = ""
  lat_a.value = ""
  lon_a.value = ""
  description_a.value = ""
  urlimg.value = ""
  list_id.push(a)
  list_url = []
  console.log(poi)
  return poi
}

export const clickadd = () => {
  img_a.src = urlimg.value
  list_url.push(urlimg.value)
  div_num_img.innerHTML = list_url.length
}

export const modalMod_create = (point) => {
  console.log(point)
  name_m.value = point.nome
  lat_m.value = point.coordi[0]
  lon_m.value = point.coordi[1]
  description_m.value = point.descri
  let html = img_m_templete.replace("%URL", point.img[0])
  div_img.innerHTML = html
}

export const modelgesture_mod = (p_point) => {
  console.log(p_point)
  poi = {
    id: p_point.id, nome: name_m.value, coordi: [parseFloat(lat_m.value), parseFloat(lon_m.value)], descri: description_m.value, img: p_point.img
  }
  return poi
}