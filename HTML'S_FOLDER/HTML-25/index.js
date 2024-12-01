document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;

    if(await obtenerNivelHtmlAlcanzado() >= 11) {
        window.location.href = '../HTML-26/index.html';
    } else {
        if (input1 === "<p>Hello World!</p>") {
            alert("Felicitaciones, has completado el Nivel 11!");
            await modificarNivelHtmlAlcanzado(11);
            window.location.href = '../HTML-26/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});