document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;

    let verificar = Number(localStorage.getItem('guardar-LevelPassed22')) || 0;
    if (verificar === 1){
        window.location.href = '../HTML-23/index.html';
    } else if (verificar === 0){
        if (input1 === "<h1>Argentina</h1>") {
            alert("Felicitaciones, has completado el Nivel 9!");
            localStorage.setItem('guardar-LevelPassed22', 1)
            window.location.href = '../HTML-23/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});