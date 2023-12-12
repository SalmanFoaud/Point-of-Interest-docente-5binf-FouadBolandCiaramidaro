import { modelgesture_add, clickadd, modelgesture_mod, modalMod_create } from "./modalges.js";
import { render_poi } from "./render.js"
import { Login, salva, recupero } from "/progetto_sito/file.js"

//recupero(callback)
const login_admin = document.getElementById("login_admin")
const un = document.getElementById("username")
const pw = document.getElementById("password")
const login = document.getElementById("login")

let list_poi = []
let mod_poit
const admin_page = document.getElementById("admin_page")
const button_add = document.getElementById("save_a")
const button_mod = document.getElementById("save_m")
const add_but = document.getElementById("add_img")

const dati_callback = (val) => {
  list_poi = JSON.parse(val.result)
  console.log(list_poi)
  render_poi(list_poi)
  gestione_but()
}


const login_callback = (val) => {
  val = JSON.parse(val.result)
  console.log(val)
  if (val) {
    login_admin.classList.add("d-none")
    admin_page.classList.remove("d-none")
    recupero(dati_callback)
  }
}

login.onclick = () => {
  Login([un.value, pw.value], login_callback)
}

add_but.onclick = () => {
  clickadd()
}

button_add.onclick = () => {
  let poi = modelgesture_add()
  list_poi.push(poi)
  salva(list_poi)
  render_poi(list_poi)
  //console.log(list_poi)
  gestione_but()
}

button_mod.onclick = () => {
  let poi_m = modelgesture_mod(mod_poit)
  //console.log(poi_m)
  let index = list_poi.indexOf(list_poi.find(p => p.id === poi_m.id))
  //console.log(list_poi)
  list_poi[index] = poi_m
  salva(list_poi)
  render_poi(list_poi)
  gestione_but()
}

const gestione_but = () => {
  let buttons = document.querySelectorAll("button.button_div")
  buttons.forEach((button) => {
    button.onclick = () => {
      let i = button.id.replace("button_", "")
      let el = i.split("_")
      let point = list_poi.find(p => p.id === parseInt(el[0]))
      //console.log(i, type_b, index)
      if (el[1] === "r") {
        list_poi.splice(list_poi.indexOf(point), 1)
        //console.log(list_poi)
        salva(list_poi)
        render_poi(list_poi)
        gestione_but()
      } else if (el[1] === "e") {
        console.log(point)
        mod_poit = point
        modalMod_create(point)
        gestione_but()
      }
    }
  })
}

