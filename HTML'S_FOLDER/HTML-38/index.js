let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let btnSiguiente = document.querySelector('.siguiente');

option3.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar")
    modificarNivelHtmlAlcanzado(19);
});

option1.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})
option2.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

btnSiguiente.addEventListener('click', async () => {
    if(await obtenerNivelHtmlAlcanzado() >= 19) {
        window.location.href='../HTML-39/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})