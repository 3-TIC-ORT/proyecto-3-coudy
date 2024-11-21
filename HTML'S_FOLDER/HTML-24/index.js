let verdadero = document.querySelector('.vdd');
let falso = document.querySelector('.fls');
let btnSiguiente = document.querySelector('.siguiente');

falso.addEventListener('click', () => {
    modificarNivelHtmlAlcanzado(10);
    alert("Respuesta correcta! Toca siguiente para continuar")    
});

verdadero.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

btnSiguiente.addEventListener('click', () => {
    if(obtenerNivelHtmlAlcanzado() >= 10) {
        window.location.href='../HTML-25/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})