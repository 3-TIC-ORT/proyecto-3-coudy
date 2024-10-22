let verdadero = document.querySelector('.vdd');
let falso = document.querySelector('.fls');
let btnSiguiente = document.querySelector('.siguiente');

falso.addEventListener('click', () => {
    alert("Respuesta correcta! Toca siguiente para continuar")
    localStorage.setItem('añadir-LevelPassed', 1)
});

verdadero.addEventListener('click', () => {
    alert("Respuesta incorrecta. Vuelve a intentarlo")
})

btnSiguiente.addEventListener('click', () => {
    let verify = Number(localStorage.getItem('añadir-LevelPassed')) || 0;
    if(verify === 1){
        window.location.href='../HTML-25/index.html';
    } else{
        alert("No has completado el ejercicio, completalo para poder continuar")
    }
})