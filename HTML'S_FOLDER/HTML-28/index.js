document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;
    let input2 = document.getElementById('inp2').value;

    let verificar = Number(localStorage.getItem('guardar-LevelPassed28')) || 0;
    if (verificar === 1){
        window.location.href = '../HTML-29/index.html';
    } else if (verificar === 0){
        if (input1 === "<ol>" && input2 === "</ol>") {
            alert("Felicitaciones, has completado el Nivel 12!");
            localStorage.setItem('guardar-LevelPassed28', 1)
            window.location.href = '../HTML-29/index.html';
        } else if (input1 === "" && input2 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});