// El principal objetivo de este desafío es fortalecer tus habilidades en lógica
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de amigos a utilizar
let amigos = []

//Función permite agregar nombres dentro de la lista y limpiarla
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (i = 0; i < amigos.length; i++) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigos[i]
    lista.appendChild(nuevoElemento)
    }
}

/*Función permite ingresar un nombre y añadirlo a amigos, en este caso 
se usa querySelector*/ 
function agregarAmigos() {
    let ingresarNombre = document.querySelector("#amigo").value;
    if (ingresarNombre == "") {
        alert("Por favor, inserte un nombre")
        return;   
    }
    amigos.push(ingresarNombre);
    document.querySelector("#amigo").value = "";
    mostrarAmigos();
}

//Función permite sortear amigos de manera aleatoria
function sortearAmigos() {
    if (amigos.length ===0) {
        //comprueba que el array esta vacio
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El amigo secreto es ${amigoSecreto}`;
}