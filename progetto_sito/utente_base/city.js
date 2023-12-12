import { Login, recupero } from "/progetto_sito/file.js"
import { add_marker } from "./map.js"
import { crea_poi } from "./elenco.js"

const login_admin = document.getElementById("login_admin")
const un = document.getElementById("username")
const pw = document.getElementById("password")
const login = document.getElementById("login")

const utente_page = document.getElementById("utente_page")

const dati_callback = (val) => {
  let list_poi = JSON.parse(val.result)
  console.log(list_poi)
  add_marker(list_poi)
  crea_poi(list_poi)
}

const login_callback = (val) => {
  val = JSON.parse(val.result)
  console.log(val)
  if (val) {
    login_admin.classList.add("d-none")
    utente_page.classList.remove("d-none")
    recupero(dati_callback)
  } else {
    alert("Username o password errati");
  }
}

login.onclick = () => {
  Login([un.value, pw.value], login_callback)
}
