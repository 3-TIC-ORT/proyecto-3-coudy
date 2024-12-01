document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;

    if(await obtenerNivelHtmlAlcanzado() >= 5) {
        window.location.href = '../HTML-15/index.html';
    } else {
        if (input1 === "</h1>") {
            alert("Felicitaciones, has completado el Nivel 5!");
            await modificarNivelHtmlAlcanzado(5);
            window.location.href = '../HTML-15/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});