document.querySelector('.siguiente').addEventListener('click', async () => {
    let input = document.getElementById('inp').value
    let input2 = document.getElementById('inp2').value;

    if (await obtenerNivelCssAlcanzado()>=11){
        window.location.href = '../CSS-27/index.html';
    } else {
        if (input === 'border-color: red;' && input2 === 'border-width: 10px;' || input2 === 'border-color: red;' && input === 'border-width: 10px;') {
            alert("Felicitaciones, has completado el Nivel 11!");
            await modificarNivelCssAlcanzado(11)
            window.location.href = '../CSS-27/index.html';
        } else if (input2 === "") {
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