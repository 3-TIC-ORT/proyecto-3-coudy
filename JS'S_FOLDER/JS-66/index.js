document.querySelector('.siguiente').addEventListener('click', () => {
    const expectedCode = `
    let colores = ["rojo", "azul", "verde"];
    for (let i = 0; i < colores.length; i++) {
        console.log(colores[i]);
    }`;

    let verificar = Number(localStorage.getItem('finalLevelPassed-JS')) || 0;

    const inp1 = document.getElementById("inp1").value;
    
    if (verificar === 1){
        window.location.href = '../JS-65/index.html';
    } else if (verificar === 0){
        if (inp1.trim() === expectedCode.trim()) {
            alert("Felicitaciones, has completado el Nivel 29!");
            localStorage.setItem('finalLevelPassed-JS', 1);
            volverr()
        } else if (inp1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});

function volverr(){
    let verify = Number(localStorage.getItem('finalLevelPassed-JS'))
    let volver = Number(localStorage.getItem('seleccion-Guia'))
    if(verify === 1){
        if(volver === 1){
            window.location.href='../../Seleccion_de_niveles-Guia'
        } else if(volver === 2){
            window.location.href='../../Seleccion_de_niveles-Manual'
        }
    }
    }

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