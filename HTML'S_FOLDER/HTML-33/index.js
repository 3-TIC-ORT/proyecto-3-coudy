document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;
    let input2 = document.getElementById('inp2').value;

    let verificar = Number(localStorage.getItem('guardar-LevelPassed33')) || 0;
    if (verificar === 1){
        window.location.href = '../HTML-34/index.html';
    } else if (verificar === 0){
        if (input1 === "<a" && input2 === "</a>") {
            alert("Felicitaciones, has completado el Nivel 15!");
            localStorage.setItem('guardar-LevelPassed33', 1)
            window.location.href = '../HTML-34/index.html';
        } else if (input1 === "" || input2 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});