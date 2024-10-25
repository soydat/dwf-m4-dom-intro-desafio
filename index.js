const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function rmvli (){
  const listaEl = document.getElementsByClassName("lista")[0]; // Accedemos al primer elemento de la colección
  while (listaEl.childNodes.length > 0) { // Verificamos que haya nodos hijos
    console.log("rmvli() executed");
    const liEl = listaEl.childNodes[0]; // Siempre eliminamos el primer nodo
    liEl.remove();
  }
}

function createli () {
  const listaEl = document.getElementsByClassName("lista")[0];
  console.log("createli() executed");

  for (let i = 0; i < cosasQueAprendimos.length; i++) {

    const element = cosasQueAprendimos[i];
    const newLiEl = document.createElement("li");

    newLiEl.innerText = element.tema
    if (element.class){
      newLiEl.classList.add(element.class);
    }

    listaEl.appendChild(newLiEl);
  }
}

function main() {
    rmvli();
    createli();
}


main();
