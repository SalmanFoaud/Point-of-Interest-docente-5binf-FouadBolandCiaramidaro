import { recupero } from "/progetto_sito/file.js"
let a
let list_url = []
let list_id = []
let list_url_add=[]
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
const urlimg2 = document.getElementById("imgurl2")
const description_m = document.getElementById("textarea_m")
const img_mod = document.getElementById("img_mod")

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
  div_num_img.innerHTML = 0
  img_a.src = ""
  list_id.push(a)
  list_url = []
  console.log(poi)
  return poi
}

export const clickadd = (n) => {
  if (n===0){
  img_a.src = urlimg.value
  list_url.push(urlimg.value)
  div_num_img.innerHTML = list_url.length}
  else {
    img_mod.src = urlimg2.value
    list_url_add.push(urlimg2.value)
  }
}

export const modalMod_create = (point) => {
  console.log(point)
  name_m.value = point.nome
  lat_m.value = point.coordi[0]
  lon_m.value = point.coordi[1]
  description_m.value = point.descri
}

export const modelgesture_mod = (p_point) => {
  console.log(p_point)
  poi = {
    id: p_point.id, nome: name_m.value, coordi: [parseFloat(lat_m.value), parseFloat(lon_m.value)], descri: description_m.value, img: p_point.img.concat(list_url_add)
  }
  list_url_add=[]
  return poi
}