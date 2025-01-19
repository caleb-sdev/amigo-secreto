// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre !== '') {
        amigos.push(nombre);
        actualizarListaAmigos();
        inputAmigo.value = ''; // Limpiar el input
    }
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];

        // Agregar botón para eliminar amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '×';
        botonEliminar.className = 'button-delete';
        botonEliminar.onclick = () => eliminarAmigo(i);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    // Crear una copia del array para hacer el sorteo
    let amigosPorAsignar = [...amigos];
    let amigosAsignados = [];

    // Asignar amigos secretos
    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigos[i];
        let indiceAleatorio;

        do {
            indiceAleatorio = Math.floor(Math.random() * amigosPorAsignar.length);
        } while (amigosPorAsignar[indiceAleatorio] === amigoActual && amigosPorAsignar.length > 1);

        const amigoSecreto = amigosPorAsignar[indiceAleatorio];
        amigosAsignados.push({
            amigo: amigoActual,
            amigoSecreto: amigoSecreto
        });

        amigosPorAsignar.splice(indiceAleatorio, 1);
    }

    // Mostrar resultados
    amigosAsignados.forEach(asignacion => {
        const li = document.createElement('li');
        li.textContent = `${asignacion.amigo} → ${asignacion.amigoSecreto}`;
        resultado.appendChild(li);
    });
}

// Agregar evento para permitir agregar amigos con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});