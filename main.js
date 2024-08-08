function botonSecundaria (){
    location.href='../Wireframe-1/index.html'
    localStorage.setItem('numero', "Estudiante de Secundaria")
}

function botonUniversidad (){
    location.href='../Wireframe-1/index.html'
    localStorage.setItem('numero', "Estudiante de Universidad")
}

function botonTrabajador (){
    location.href='../Wireframe-1/index.html'
    localStorage.setItem('numero', "Trabajador")
}

function botonNinguna (){
    location.href='../Wireframe-1/index.html'
    localStorage.setItem('numero', "Otro")
}

function botonProgramador (){
    location.href='../Wireframe-24/index.html'
    localStorage.setItem('helloWorld', "Programador")
}

function botonDiversion (){
    location.href='../Wireframe-24/index.html'
    localStorage.setItem('helloWorld', "Diversión")
}

function botonTrabajo (){
    location.href='../Wireframe-24/index.html'
    localStorage.setItem('helloWorld', "Trabajo")
}

function botonOtrosMotivos (){
    location.href='../Wireframe-24/index.html'
    localStorage.setItem('helloWorld', "Otros motivos")
}

let numero = String(localStorage.getItem('numero'));
let helloWorld = String(localStorage.getItem('helloWorld'));

console.log("Te sientes más identificado como: " + numero)

console.log("Estas programando por: " + helloWorld)
