document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;

    let verificar = Number(localStorage.getItem('guardar-LevelPassed14')) || 0;
    if (verificar === 1){
        window.location.href = '../HTML-15/index.html';
    } else if (verificar === 0){
        if (input1 === "</h1>") {
            alert("Felicitaciones, has completado el Nivel 5!");
            localStorage.setItem('guardar-LevelPassed14', 1)
            window.location.href = '../HTML-15/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});