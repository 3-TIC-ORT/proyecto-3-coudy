document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;
    let input2 = document.getElementById('inp2').value;

    let verificar = Number(localStorage.getItem('guardar-LevelPassed31')) || 0;
    if (verificar === 1){
        window.location.href = '../HTML-32/index.html';
    } else if (verificar === 0){
        if (input1 === "<ul>" && input2 === "</ul>") {
            alert("Felicitaciones, has completado el Nivel 14!");
            localStorage.setItem('guardar-LevelPassed31', 1)
            window.location.href = '../HTML-32/index.html';
        } else if (input1 === "" || input2 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});