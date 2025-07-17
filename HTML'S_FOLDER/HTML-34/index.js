document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;

    if(await obtenerNivelHtmlAlcanzado() >= 16) {
        window.location.href = '../HTML-35/index.html';
    } else {
        if (input1 === "href=") {
            alert("Felicitaciones, has completado el Nivel 16!");
            await modificarNivelHtmlAlcanzado(16);
            window.location.href = '../HTML-35/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});