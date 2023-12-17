import { Login, recupero } from "/progetto_sito/file.js";
import { add_marker } from "./map.js";
import { crea_poi } from "./elenco.js";

const login_admin = document.getElementById("login_admin");
const un = document.getElementById("username");
const pw = document.getElementById("password");
const login = document.getElementById("login");

const utente_page = document.getElementById("utente_page");
Cookies.set("s",true)
console.log(Cookies.get("s"))

const dati_callback = (val) => {
  let list_poi = JSON.parse(val.result);
  console.log(list_poi);
  add_marker(list_poi);
  crea_poi(list_poi);
}

const login_callback = (val) => {
  val = JSON.parse(val.result);
  console.log(val);
  if (val) {
    if (un.value !== "" && pw.value !== ""){
    Cookies.set("username",un.value);
    Cookies.set("password",pw.value);}
    login_admin.classList.add("d-none");
    utente_page.classList.remove("d-none");
    recupero(dati_callback);
  } else {
    alert("Username o password errati");
  }
}
function TryNullUndifinea(val) {
  console.log(val)
  return val===null || typeof val=== "undefined";}

window.onload= function () {
if (!(TryNullUndifinea(Cookies.get("username")))&& Cookies.get("username")!=""&&!(TryNullUndifinea(Cookies.get("password")))&& Cookies.get("password")!=""){
  let user=Cookies.get("username");
  let pass=Cookies.get("password");
  console.log(user,pass);
  Login([user, pass], login_callback);
}else{
    console.log(Cookies.get("username"),Cookies.get("password"));
}}


login.onclick = () => {
  Login([un.value, pw.value], login_callback);
}