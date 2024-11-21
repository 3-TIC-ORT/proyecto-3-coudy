let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let btnSiguiente = document.querySelector('.siguiente');

option1.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar")
    modificarNivelHtmlAlcanzado(17);
});

option2.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})
option3.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

btnSiguiente.addEventListener('click', () => {
    if(obtenerNivelHtmlAlcanzado() >= 17) {
        window.location.href='../HTML-36/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})