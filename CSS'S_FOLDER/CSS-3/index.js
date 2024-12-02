// Seleccionar los botones de opción y el botón siguiente
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.siguiente');

// Función para manejar clics en las opciones
function handleOptionClick(option) {
    if (option === 'option1') {
        alert('Respuesta correcta, toca siguiente para continuar');
        modificarNivelCssAlcanzado(1); // Marca el nivel como completado
    } else {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    }
}

// Asociar eventos a las opciones
option1.addEventListener('click', () => handleOptionClick('option1'));
option2.addEventListener('click', () => handleOptionClick('option2'));
option3.addEventListener('click', () => handleOptionClick('option3'));

// Asociar evento al botón de siguiente
nextButton.addEventListener('click', async () => {
    if (await obtenerNivelCssAlcanzado() >= 1) {
        window.location.href = '../CSS-4/index.html'; // Cambiar al nivel siguiente
    } else {
        alert("Aún no has completado el nivel");
    }
});
