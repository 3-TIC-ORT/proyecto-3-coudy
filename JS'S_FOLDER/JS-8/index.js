document.querySelector('.siguiente').addEventListener('click', async () => {
    let input1 = document.getElementById('inp1').value.trim().toLowerCase();
    let input2 = document.getElementById('inp2').value.trim();
    
    if (await obtenerNivelJsAlcanzado() >= 2){
        window.location.href = '../JS-9/index.html';
    } else {
        if ((input1 === 'x') && (input2 === '50')) {
            alert("Felicitaciones, has completado el Nivel 2!");
            await modificarNivelJsAlcanzado(2);
            window.location.href = '../JS-9/index.html';
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