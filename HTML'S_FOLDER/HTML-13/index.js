// Selección del botón siguiente
const botonSiguiente = document.querySelector('.siguiente');

// Función para obtener el nivel alcanzado desde localStorage
function obtenerNivelHtmlAlcanzado() {
    const data = JSON.parse(localStorage.getItem('users')) || {};
    return data.nivelHtml || 0; // Retorna el nivel alcanzado o 0 si no existe
}

// Función para modificar el nivel alcanzado en localStorage dentro de 'users'
function modificarNivelHtmlAlcanzado(nivel) {
    const data = JSON.parse(localStorage.getItem('users')) || {}; // Obtiene el objeto 'users'
    data.nivelHtml = nivel; // Actualiza el nivel dentro del objeto 'users'
    localStorage.setItem('users', JSON.stringify(data)); // Guarda el objeto actualizado
}

// Verificación de si el nivel es suficiente para habilitar el botón
function verificarNivelCompletado() {
    const nivel = obtenerNivelHtmlAlcanzado();
    if (nivel >= 4) {
        botonSiguiente.disabled = false; // Habilita el botón si el nivel es 4 o más
    } else {
        botonSiguiente.disabled = true; // Deshabilita el botón si el nivel es menor
    }
}

// Llamada inicial para verificar si el nivel ha sido completado previamente
verificarNivelCompletado();

// Controla el botón "siguiente" para avanzar al próximo nivel
botonSiguiente.addEventListener('click', () => {
    if (obtenerNivelHtmlAlcanzado() >= 4) {
        window.location.href = '../HTML-11/index.html';
    } else {
        alert("Aún no has completado el nivel");
    }
});

// Drag and Drop para verificar respuestas
const dragItems = document.querySelectorAll('.drag-item');
const dropArea = document.querySelector('.dropArea');

// Agrega el evento de arrastrar para cada elemento
dragItems.forEach(item => {
    item.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
    });
});

// Permite que el área de soltar acepte el elemento arrastrado
dropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
});

// Detecta cuando se suelta un elemento en el área de soltar
dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text');
    
    // Verifica la respuesta correcta o incorrecta según el elemento arrastrado
    if (draggedElementId === 'opcion2') {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    } else if (draggedElementId === 'opcion1') {
        alert('Respuesta correcta, toca siguiente para continuar');
        modificarNivelHtmlAlcanzado(4); // Guarda el nivel alcanzado como 4
        verificarNivelCompletado(); // Llama a verificar el nivel para habilitar el botón
    } else if (draggedElementId === 'opcion3') {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    }
});
