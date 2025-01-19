// Array para almacenar los amigos
let amigos = [];

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

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.className = 'name-item';

        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';

        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigos[i];
        itemContainer.appendChild(nombreSpan);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'button-delete';
        deleteButton.innerHTML = '✕';
        deleteButton.onclick = () => eliminarAmigo(i);
        itemContainer.appendChild(deleteButton);

        li.appendChild(itemContainer);
        lista.appendChild(li);
    }
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1);
    mostrarAmigos();
}

function sortearAmigo() {
    // Validar que haya suficientes participantes
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 participantes para realizar el sorteo');
        return;
    }

    // Limpiar resultados anteriores
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    // Hacer una copia del array de amigos para el sorteo
    let amigosDisponibles = [...amigos];
    let asignaciones = [];

    // Realizar el sorteo
    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigos[i];
        let amigoSecreto;

        // Si es el último participante y le tocó él mismo, rehacer el sorteo
        if (amigosDisponibles.length === 1 && amigosDisponibles[0] === amigoActual) {
            return sortearAmigo(); // Volver a intentar
        }

        // Encontrar un amigo secreto válido
        do {
            const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
            amigoSecreto = amigosDisponibles[indiceAleatorio];
        } while (amigoSecreto === amigoActual && amigosDisponibles.length > 1);

        // Eliminar el amigo secreto de los disponibles
        amigosDisponibles = amigosDisponibles.filter(amigo => amigo !== amigoSecreto);

        // Guardar la asignación
        asignaciones.push({
            persona: amigoActual,
            amigoSecreto: amigoSecreto
        });
    }

    // Mostrar los resultados
    asignaciones.forEach(asignacion => {
        const li = document.createElement('li');
        li.className = 'result-item';
        li.textContent = `${asignacion.persona} → ${asignacion.amigoSecreto}`;
        resultadoLista.appendChild(li);
    });
}}