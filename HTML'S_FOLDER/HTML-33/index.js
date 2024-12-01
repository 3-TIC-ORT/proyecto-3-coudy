document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;
    let input2 = document.getElementById('inp2').value;

    if(await obtenerNivelHtmlAlcanzado() >= 15) {
        window.location.href = '../HTML-34/index.html';
    } else {
        if (input1 === "<a" && input2 === "</a>") {
            alert("Felicitaciones, has completado el Nivel 15!");
            await modificarNivelHtmlAlcanzado(15);
            window.location.href = '../HTML-34/index.html';
        } else if (input1 === "" || input2 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});