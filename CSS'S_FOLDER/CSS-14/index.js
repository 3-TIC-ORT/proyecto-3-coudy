document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp1').value;
    let input2 = document.getElementById('inp2').value;

    if (await obtenerNivelCssAlcanzado()>=5){
        window.location.href = '../CSS-15/index.html';
    } else {
        if (input1 === '.colortexto' && input2 === 'color:') {
            alert("Felicitaciones, has completado el Nivel 5!");
            await modificarNivelCssAlcanzado(5); // Marca el nivel como completado
            window.location.href = '../CSS-15/index.html';
        } else if (input1 === "" && input2 === "") {
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