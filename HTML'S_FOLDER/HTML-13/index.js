// Obtener los inputs y el botón "Siguiente"
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');
const inp4 = document.getElementById('inp4');
const botonSiguiente = document.getElementById('siguiente');

// Función para verificar si todos los campos están completos
function verificarCamposCompletos() {
    return inp1.value !== '' && inp2.value !== '' && inp3.value !== '' && inp4.value !== '';
}

// Función para verificar si las respuestas son correctas
function verificarRespuestas() {
    return inp1.value === '<' && inp2.value === '>' && inp3.value === '<' && inp4.value === '>';
}

// Función para habilitar el botón "Siguiente" solo si los campos están completos y correctos
function actualizarBotonSiguiente() {
    if (verificarCamposCompletos() && verificarRespuestas()) {
        botonSiguiente.disabled = false; // habilita el botón
    } else {
        botonSiguiente.disabled = true; // deshabilita el botón
    }
}

// Evento de cambio en los inputs para verificar constantemente
inp1.addEventListener('input', actualizarBotonSiguiente);
inp2.addEventListener('input', actualizarBotonSiguiente);
inp3.addEventListener('input', actualizarBotonSiguiente);
inp4.addEventListener('input', actualizarBotonSiguiente);

// Controla el botón "Siguiente" para avanzar al próximo nivel
botonSiguiente.addEventListener('click', () => {
    if (verificarRespuestas()) {
        // Aquí puedes guardar el nivel alcanzado o hacer lo que necesites
        modificarNivelHtmlAlcanzado(4); // Guarda el nivel alcanzado como 3
        window.location.href = '../HTML-14/index.html'; // Redirige al siguiente nivel
    } else {
        alert('Aún no has completado el nivel correctamente');
    }
});

// Deshabilitar el botón "Siguiente" al inicio
botonSiguiente.disabled = true;
