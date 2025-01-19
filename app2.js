// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo al array y mostrarlo en la lista HTML
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();  // Obtener el nombre desde el input

    if (nombre !== "") {
        amigos.push(nombre);  // Agregar el nombre al array de amigos
        document.getElementById("amigo").value = "";  // Limpiar el input

        mostrarAmigos();  // Actualizar la lista en la interfaz
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");  // Obtener el elemento de la lista

    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Iterar sobre el array amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");  // Crear un nuevo <li>
        li.textContent = amigos[i];  // Establecer el texto del <li> como el nombre del amigo
        lista.appendChild(li);  // Agregar el <li> a la lista HTML
    }
}

// Función para sortear un amigo secreto de manera aleatoria
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Añade al menos un nombre.");
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre del amigo sorteado en el área de resultados
    document.getElementById("resultado").innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}

