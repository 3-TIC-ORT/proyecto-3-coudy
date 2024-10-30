document.querySelector('.siguiente').addEventListener('click', () => {
    let input2 = document.getElementById('inp2').value;

    let verificar = Number(localStorage.getItem('guardar-Level9-CSS')) || 0;
    if (verificar === 1){
        window.location.href = '../CSS-21/index.html';
    } else if (verificar === 0){
        if (input2 === 'font-weight:') {
            alert("Felicitaciones, has completado el Nivel 9!");
            localStorage.setItem('guardar-Leve9-CSS', 1)
            window.location.href = '../CSS-21/index.html';
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