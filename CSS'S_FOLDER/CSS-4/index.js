// Manejadores de eventos para las opciones
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let btnSiguiente = document.querySelector('.siguiente');

// Nivel actual
const nivelActual = 2;

option2.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar");
    modificarNivelCssAlcanzado(2); // Marca el nivel como completado
});

option1.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

option3.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

btnSiguiente.addEventListener('click', () => {    
    if (obtenerNivelCssAlcanzado() >= 2) {
        window.location.href = '../CSS-5/index.html'; // Redirigir al siguiente nivel
    } else {
        alert("No has completado el ejercicio, completalo para poder continuar");
    }
});

// Configurar imagen del círculo
const fileInput = document.getElementById('file-input');
const imageCircle = document.getElementById('image-circle');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            imageCircle.style.backgroundImage = `url(${reader.result})`;
            imageCircle.style.backgroundSize = 'cover';
            imageCircle.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
});