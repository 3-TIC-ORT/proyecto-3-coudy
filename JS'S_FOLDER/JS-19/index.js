let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option4 = document.querySelector('.option4');
let option5 = document.querySelector('.option5');
let btnSiguiente = document.querySelector('.siguiente');

option5.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar")
    modificarNivelJsAlcanzado(9);
});

option2.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

option1.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

option4.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo");
});

btnSiguiente.addEventListener('click', async () => {    
    if (await obtenerNivelJsAlcanzado() >= 9){
        window.location.href='../JS-20/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})