let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');
let option5 = document.querySelector('.option5');
let option6 = document.querySelector('.option6');
let btnSiguiente = document.querySelector('.siguiente');

option1.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar")
    modificarNivelHtmlAlcanzado(8);
});

option2.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

option3.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

option4.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

option5.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

option6.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

btnSiguiente.addEventListener('click', async () => {
    if(await obtenerNivelHtmlAlcanzado() >= 8) {
        window.location.href='../HTML-22/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})