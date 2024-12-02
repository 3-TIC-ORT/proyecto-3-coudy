document.querySelector('.siguiente').addEventListener('click', async () => {
    const expectedCode = `
    let colores = ["rojo", "azul", "verde"];
    for (let i = 0; i < colores.length; i++) {
        console.log(colores[i]);
    }`;
        
    const inp1 = document.getElementById("inp1").value;
    
    if (await obtenerNivelJsAlcanzado() >= 30){
        let experienciaProgramacion = await obtenerExperiencia();
                        
        if(experienciaProgramacion === "poca" || experienciaProgramacion === "ninguna") 
        {
            window.location.href='../../Seleccion_de_niveles-Guia/index.html'
        } 
        else 
        {
            window.location.href='../../Seleccion_de_niveles-Manual/index.html'
        }
    } else {
        if (inp1.trim() === expectedCode.trim()) {
            alert("Felicitaciones, has completado el Nivel 29!");
            await modificarNivelJsAlcanzado(30);
            volverr()
        } else if (inp1 === "") {
            alert("No has completado el ejercicio, completalo para poder continuar");
        } else {
            alert("Respuesta/s incorrecta/s");
        }
    }
});

function volverr()
{
    if (obtenerNivelJsAlcanzado() >= 30)
    {                  
        let experienciaProgramacion = obtenerExperiencia();           
        if(experienciaProgramacion === "poca" || experienciaProgramacion === "ninguna") 
        {
            window.location.href='../../Seleccion_de_niveles-Guia/index.html'
        } 
        else 
        {
            window.location.href='../../Seleccion_de_niveles-Manual/index.html'
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