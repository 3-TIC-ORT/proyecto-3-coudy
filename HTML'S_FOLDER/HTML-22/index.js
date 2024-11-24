document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;

    if(obtenerNivelHtmlAlcanzado() >= 9) {
        window.location.href = '../HTML-23/index.html';
    } else {
        if (input1 === "<h1>Argentina</h1>") {
            alert("Felicitaciones, has completado el Nivel 9!");
            modificarNivelHtmlAlcanzado(9);
            window.location.href = '../HTML-23/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});