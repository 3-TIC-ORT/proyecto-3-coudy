document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;

    if(await obtenerNivelHtmlAlcanzado() >= 9) {
        window.location.href = '../HTML-23/index.html';
    } else {
        if (input1 === "<h1>Argentina</h1>") {
            alert("Felicitaciones, has completado el Nivel 9!");
            await modificarNivelHtmlAlcanzado(9);
            window.location.href = '../HTML-23/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});