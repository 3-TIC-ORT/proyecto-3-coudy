let verdadero = document.querySelector('.vdd');
let falso = document.querySelector('.fls');
let btnSiguiente = document.querySelector('.siguiente');

verdadero.addEventListener('click', () => {
    modificarNivelHtmlAlcanzado(6);
    alert("Respuesta correcta! Toca siguiente para continuar")    
});

falso.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

btnSiguiente.addEventListener('click', async() => {
    if(await obtenerNivelHtmlAlcanzado() >= 6) {
        window.location.href='../HTML-17/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})