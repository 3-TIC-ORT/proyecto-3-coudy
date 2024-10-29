function cambiarHtml (){
    location.href = '../Wireframe-3/index.html'
    sessionStorage.setItem('hola', 1)
}

function modificarVariable (){
    sessionStorage.setItem('hola', 2)
}

let hola = Number(sessionStorage.getItem('hola')) || 0;

function moverArchivo (){
    location.href = '../Wireframe-1/index.html'
}

function moverArchivo2 (){
    location.href = '../Wireframe-2/index.html'
}

let nombre = document.getElementById("boton-vueltaAlWireframe2-o-1")

if (hola === 1){
    nombre.addEventListener("click", moverArchivo2)
} else if (hola === 2){
    nombre.addEventListener("click", moverArchivo)
}