document.querySelector('.siguiente').addEventListener('click', () => {
    let input1 = document.getElementById('inp1').value.trim();

    let verificar = Number(localStorage.getItem('guardar-Level18-JS')) || 0;
    if (verificar === 1){
        window.location.href = '../JS-41/index.html';
    } else if (verificar === 0){
        if (input1 === 'getElementById') {
            alert("Felicitaciones, has completado el Nivel 18!");
            localStorage.setItem('guardar-Level18-JS', 1);
            window.location.href = '../JS-41/index.html';
        } else if (input1 === "") {
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