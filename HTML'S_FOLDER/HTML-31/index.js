document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp').value;
    let input2 = document.getElementById('inp2').value;

    if(obtenerNivelHtmlAlcanzado >= 14) {
        window.location.href = '../HTML-32/index.html';
    } else if (verificar === 0){
        if (input1 === "<ul>" && input2 === "</ul>") {
            alert("Felicitaciones, has completado el Nivel 14!");
            modificarNivelHtmlAlcanzado(14);
            window.location.href = '../HTML-32/index.html';
        } else if (input1 === "" || input2 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});