document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp1').value.trim();
    let input2 = document.getElementById('inp2').value.trim();
    let input3 = document.getElementById('inp3').value.trim();
    
    if (obtenerNivelJsAlcanzado() >= 13){
        window.location.href = '../JS-30/index.html';
    } else {
        if (input1 === 'if' && input2 === '===' && input3 === 'alert') {
            alert("Felicitaciones, has completado el Nivel 13!");
            modificarNivelJsAlcanzado(13);
            window.location.href = '../JS-30/index.html';
        } else if (input1 === '' && input2 === '' && input3 === '') {
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