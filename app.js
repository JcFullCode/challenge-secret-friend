// El principal objetivo de este desafío es fortalecer tus habilidades en lógica
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de amigos a utilizar
let amigos = ["Celia", "Lini", "Camila", "Daniel", "Valery"]
/*La siguiente función permite agregar nombres dentro de la lista como
elemento html y limpiarla antes de agregar nuevos elementos*/ 
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (i = 0; i < amigos.length; i++) {
       let nuevoElemento = document.createElement("li");
       nuevoElemento.textContent = amigos[i]
        lista.appendChild(nuevoElemento)
    }
}
mostrarAmigos();

/*Esta función permite ingresar un nombre en el campo de texto
y añadirlo a la lista de amigos creada anteriormente, en este caso 
usaré querySelector en vez GetElementById para obtener el texto*/ 
function agregarAmigo() {
    let ingresarNombre = document.querySelector("#amigo").value;
    if (ingresarNombre == "") {
        alert("Por favor, inserte un nombre")
        return;
       
    }
     amigos.push(ingresarNombre);
     document.querySelector("#amigo").value = "";
     mostrarAmigos();
}

