
let amigoSecretos = [];

//Funcion para agregar un amigo secreto
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;    // Obtener el valor del input
    if (nombre) {
        amigoSecretos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

console.log(amigoSecretos);

// Funcion para mostrar los amigos secretos abajo
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = "";
    for (let amigo of amigoSecretos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigoSecretos.length === 0) {
        document.getElementById("resultado").textContent = "No hay más amigos para sortear.";
        return;
    }
    // Selecciona un índice aleatorio
    let indice = Math.floor(Math.random() * amigoSecretos.length);
    let amigoSorteado = amigoSecretos.splice(indice, 1)[0]; // Elimina y obtiene el amigo
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSorteado}`;
    mostrarAmigos(); // Actualiza la lista de amigos
}



