function cambiarVariable (){
    sessionStorage.setItem('chau', 1)
}

function cambiarVariable2 (){
    sessionStorage.setItem('chau', 2)
    location.href='../Wireframe-4/index.html'
}

let chau = Number(sessionStorage.getItem('chau')) || 0;
let nombre2 = document.getElementById("boton-vueltaAlWireframe1-o-3");

function verArchivo (){
    location.href = '../Wireframe-1/index.html'
}

function verArchivo2 (){
    location.href = '../Wireframe-3/index.html'
}

if (chau === 1){
    nombre2.addEventListener("click", verArchivo)
} else if (chau === 2){
    nombre2.addEventListener("click", verArchivo2)
}