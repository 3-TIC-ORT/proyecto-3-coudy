document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp1').value;
    let input2 = document.getElementById('inp2').value;
    let input3 = document.getElementById('inp3').value;
    let input4 = document.getElementById('inp4').value;

    let verify = Number(localStorage.getItem('guardar-LevelPassed')) || 0;
    if (verify === 1){
        window.location.href = '../HTML-14/index.html';
    } else if (verify === 0){
        if (input1 === "<" && input2 === ">" && input3 === "<" && input4 === ">") {
            alert("Felicitaciones, has completado el Nivel 4!");
            localStorage.setItem('guardar-LevelPassed', 1)
            window.location.href = '../HTML-14/index.html';
        } else if (input1 === "" && input2 === "" && input3 === "" && input4 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});