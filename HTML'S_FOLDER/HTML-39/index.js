let verdadero = document.querySelector('.vdd');
let falso = document.querySelector('.fls');
let btnSiguiente = document.querySelector('.siguiente');

falso.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar")
    modificarNivelHtmlAlcanzado(20);
});

verdadero.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

btnSiguiente.addEventListener('click', () => {
    if(obtenerNivelHtmlAlcanzado >= 20) {
        window.location.href='../HTML-41/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})