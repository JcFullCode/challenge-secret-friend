// El principal objetivo de este desafío es fortalecer tus habilidades en lógica
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de amigos a utilizar
let amigos = ["Celia", "Lini", "Camila", "Daniel", "Valery"]

function mostrarAmigos() {
    // 1.Obtenemos el elemento <ul> que representa una lista desordenada en HTML
    let obtenerElemento = document.getElementById("listaAmigos");
    // 2.Limpiar la lista para asegurar que no hallan duplicados
    lista.innerHTML = ""
    // 3.Iterar sobre el arreglo 
    for (i = 0; i < amigos.length; i++) {
        // Crear elementos de la lista para cada titulo
       let nuevoElemento = document.createElement("li");
       // 4. asignamos el nombre y lo creamos agregandolo a la lista <ul>
       nuevoElemento.textContent = amigos[i]
        lista.appendChild(nuevoElemento)
    }
}
//llamamos la función
mostrarAmigos();