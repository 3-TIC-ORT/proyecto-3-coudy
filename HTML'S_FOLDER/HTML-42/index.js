document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;
    let input2 = document.getElementById('inp2').value;
    
    if(await obtenerNivelHtmlAlcanzado() >= 21) {
        window.location.href = '../HTML-43/index.html';
    } else {
        if (input1 === "<div>" && input2 === '</div>') {
            alert("Felicitaciones, has completado el Nivel 22!");
            await modificarNivelHtmlAlcanzado(21);
            window.location.href = '../HTML-43/index.html';
        } else if (input1 === "" && input2 === '') {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});