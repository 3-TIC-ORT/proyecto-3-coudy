document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;

    let verificar = Number(localStorage.getItem('guardar-Level3-CSS')) || 0;
    if (verificar === 1){
        window.location.href = '../CSS-6/index.html';
    } else if (verificar === 0){
        if (input1 === '<link rel="stylesheet" href="mystyle.css">') {
            alert("Felicitaciones, has completado el Nivel 3!");
            localStorage.setItem('guardar-Level3-CSS', 1)
            window.location.href = '../CSS-6/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});