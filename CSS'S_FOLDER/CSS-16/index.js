document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp1').value;
    let input2 = document.getElementById('inp2').value;
    let input3 = document.getElementById('inp3').value;
    let input4 = document.getElementById('inp4').value;
    let input5 = document.getElementById('inp5').value;

    let verificar = Number(localStorage.getItem('guardar-Level6-CSS')) || 0;
    if (obtenerNivelCssAlcanzado()>=6){
        window.location.href = '../CSS-17/index.html';
    } else {
        if (input1 === 'h1' && input2 === 'color:' && input3 === 'white' && input4 === 'background-color:' && input5 === 'blue') {
            alert("Felicitaciones, has completado el Nivel 6!");
            modificarNivelCssAlcanzado(6); // Marca el nivel como completado
            window.location.href = '../CSS-17/index.html';
        } else if (input1 === "" && input2 === "" && input3 === "" && input4 === "" && input5 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});

document.querySelector('.css-imgYtxt').addEventListener('click', ()=>{
    let elements = document.querySelectorAll('.element')
    elements.forEach((element)=>{element.classList.add('invisible');})
    let cambiar = document.querySelector('.index-imgYtxt')
    cambiar.classList.add('sacarFondo')
    let nuevo = document.querySelector('.css-imgYtxt')
    nuevo.classList.add('agregarFondo')
    document.querySelector('.style-consig').style.opacity = "100%";
});
document.querySelector('.index-imgYtxt').addEventListener('click', ()=>{
    let elements = document.querySelectorAll('.element')
    elements.forEach((element)=>{element.classList.remove('invisible');})
    let cambiar = document.querySelector('.index-imgYtxt')
    cambiar.classList.remove('sacarFondo')
    let nuevo = document.querySelector('.css-imgYtxt')
    nuevo.classList.remove('agregarFondo')
    document.querySelector('.style-consig').style.opacity = "0%";
})