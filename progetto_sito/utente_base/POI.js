import { recupero,Login } from "/progetto_sito/file.js";

const poi_page=document.getElementById("poi_page");
const login_admin=document.getElementById("login_admin");
const un = document.getElementById("username");
const pw = document.getElementById("password");
const login=document.getElementById("login");


const div_descrizione = document.getElementById("dettagli_poi");
const div_carosel = document.getElementById("img_item");
const temple_carosello = `
  <div class="carousel-item %ACTIVE">
      <img class="d-block w-100" src=%URL alt="%POSITION slide">
  </div>`;

const templete_poi =
  `<h3>%TITOLO</h3>
  <div id="descrizione">%DESCRIZIONE</div>`;

const dati_callback = (val) => {
  let list_poi = JSON.parse(val.result);
  console.log(list_poi);
  let url_page = new URLSearchParams(window.location.search);
  let id = parseInt(url_page.get("id"));
  let poi = list_poi.find(p => p.id === id);
  render_poi(poi);
  render_carosello(poi.img);
  console.log(poi);
}
const render_poi = (poi) => {
  let html2 = templete_poi;
  html2 = html2.replace("%TITOLO", poi.nome).replace("%DESCRIZIONE", poi.descri);
  div_descrizione.innerHTML = html2;
}

const login_callback = (val) => {
  val = JSON.parse(val.result);
  console.log(val);
  if (val) {
    login_admin.classList.add("d-none");
    poi_page.classList.remove("d-none");
    recupero(dati_callback)
  } else {
    alert("Username o password errati");
  }
}

function TryNullUndifinea(val) {
  return val===null || typeof val=== "undefined";
}

window.onload= function () {
  if (!(TryNullUndifinea(Cookies.get("username")))&& Cookies.get("username")!==""&&!(TryNullUndifinea(Cookies.get("password")))&& Cookies.get("password")!==""){
    let user=Cookies.get("username");
    let pass=Cookies.get("password");
    console.log(typeof user,pass);
    Login([user, pass], login_callback);
}else{
    console.log(Cookies.get("username"),Cookies.get("password"));
}}

login.onclick=()=>{
  Login([un.value, pw.value], login_callback);
}

const render_carosello = (imgs) => {
  let html = "";
  imgs.forEach((img, indi) => {
    if (indi === 0) {
      html += temple_carosello.replace("%ACTIVE", "active");
    } else {
      html += temple_carosello.replace("%ACTIVE", "");
    }
    html = html.replace("%URL", img).replace("%POSITION", indi + 1);
  })
  div_carosel.innerHTML = html;
}