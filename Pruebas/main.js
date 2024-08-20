document.getElementById("tresFlechas").addEventListener("click", function() {
    const menu = document.getElementById("miMenu");

    if (menu.classList.contains("mostrar")) {
        menu.classList.remove("mostrar");
        menu.classList.add("ocultar");
    } else {
        menu.classList.remove("ocultar");
        menu.classList.add("mostrar");
    }
    if (niveles2.classList.contains("girar")){
        niveles2.classList.remove("girar")
        niveles2.classList.add("girar2")
}
});

let inicio = document.getElementById("imgInicio")
let inicio2 = document.getElementById("inicio")
let reglas = document.getElementById("imgReglas")
let reglas2 = document.getElementById("reglas")
let niveles = document.getElementById("niveles")
let niveles2 = document.getElementById("imgNiveles")

function llevarReglas (){
    window.location = '../Wireframe-4/index.html'
}

reglas.addEventListener("click", llevarReglas)
reglas2.addEventListener("click", llevarReglas)

function cambiarFlecha (){

    if (niveles2.classList.contains("girar")){
        niveles2.classList.remove("girar")
        niveles2.classList.add("girar2")
    }
    else {
        niveles2.classList.remove("girar2")
        niveles2.classList.add("girar")
    }
}

niveles.addEventListener("click", cambiarFlecha)
niveles2.addEventListener("click", cambiarFlecha)