// Array para almacenar los amigos
let amigos = [];

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // 2. Limpiar la lista existente
    lista.innerHTML = '';

    // 3. Iterar sobre el arreglo y crear elementos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear el elemento de lista
        const li = document.createElement('li');
        li.className = 'name-item';

        // Crear contenedor para el nombre y el botón de eliminar
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';

        // Agregar el nombre
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigos[i];
        itemContainer.appendChild(nombreSpan);

        // Agregar botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.className = 'button-delete';
        deleteButton.innerHTML = '✕';
        deleteButton.onclick = () => eliminarAmigo(i);
        itemContainer.appendChild(deleteButton);

        li.appendChild(itemContainer);
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigoAleatorio() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return null;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    const li = document.createElement('li');
    li.className = 'result-item';
    li.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
    resultadoElement.appendChild(li);

    return amigoSorteado;
}

// Función auxiliar para eliminar un amigo
function eliminarAmigo(indice) {
    // Eliminar el amigo del array
    amigos.splice(indice, 1);
    // Actualizar la vista
    mostrarAmigos();
}

// Función para agregar un nuevo amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validaciones
    if (nombre === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    // Agregar el nuevo amigo
    amigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = '';

    // Actualizar la lista
    mostrarAmigos();
}