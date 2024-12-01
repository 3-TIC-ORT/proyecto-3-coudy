document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;

    if(await obtenerNivelHtmlAlcanzado() >= 13) {
        window.location.href = '../HTML-31/index.html';
    } else {
        if (input1 === "<li>Café</li>") {
            alert("Felicitaciones, has completado el Nivel 13!");
            await modificarNivelHtmlAlcanzado(13);
            window.location.href = '../HTML-31/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});