const token = "77c8080f-df5b-44a8-b065-eca077af208f";
const username = document.getElementById("username")
const password = document.getElementById("password")
const lista_poi = document.getElementById("list_poi")

/*
username:utente
password:utente
*/

export function Login(data, callback1) {
  fetch("https://ws.progettimolinari.it/credential/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": "119c7e0d-3261-45f9-b6bf-7a1b4ea1b93b"
    },
    body: JSON.stringify({
      username: data[0],
      password: data[1]
    })
  })
    .then((response) => response.json())
    .then((data) => callback1(data))
    .catch((err) => {
      console.log(err);
    });
};


export function salva(dati) {
  fetch("https://ws.progettimolinari.it/cache/set", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "key": "06debec2-1227-4916-a600-df65297488f7"
    },
    body: JSON.stringify({
      key: "ciara_bolli_fouad_es5_poi_",
      value: JSON.stringify(dati)
    })
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .then(console.log("ok"));
}

export function recupero(callback) {
  fetch("https://ws.progettimolinari.it/cache/get", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "key": "06debec2-1227-4916-a600-df65297488f7"
    },
    body: JSON.stringify({
      key: "ciara_bolli_fouad_es5_poi_",
    })
  }).then((response) => response.json())
    .then((POI) => callback(POI));
}