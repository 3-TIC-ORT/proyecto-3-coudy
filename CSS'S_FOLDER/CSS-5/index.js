document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp').value;
    
    if (await obtenerNivelCssAlcanzado() >= 3){
        window.location.href = '../CSS-6/index.html';
    } else {
        if (input1 === '<link rel="stylesheet" href="mystyle.css">') {
            alert("Felicitaciones, has completado el Nivel 3!");
            await modificarNivelCssAlcanzado(3); // Marca el nivel como completado
            window.location.href = '../CSS-6/index.html';
        } else if (input1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});