function botonSecundaria (){
    location.href='../Wireframe-1/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Estudiante de Secundaria");
}

function botonUniversidad (){
    location.href='../Wireframe-1/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Estudiante de Universidad")
}

function botonTrabajador (){
    location.href='../Wireframe-1/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Trabajador")
}

function botonNinguna (){
    location.href='../Wireframe-1/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Otro")
}

function botonProgramador (){
    location.href='../Wireframe-24/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Programador")
}

function botonDiversion (){
    location.href='../Wireframe-24/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Diversión")
}

function botonTrabajo (){
    location.href='../Wireframe-24/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Trabajo")
}

function botonOtrosMotivos (){
    location.href='../Wireframe-24/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Otros motivos")
}

let teSentisIdentificado = String(localStorage.getItem('teSentisIdentificado'));
let razonAprender = String(localStorage.getItem('razonAprender'));

// Obtener el ID del usuario activo (esto se debe hacer cuando el usuario inicie sesión)
let userId = 'el-id-del-usuario-registrado';

// Reutilizar la función de guardar datos del usuario
function guardarDatosUsuario(userId, key, value) {
    let userData = JSON.parse(localStorage.getItem(userId)) || {};
    userData[key] = value;
    localStorage.setItem(userId, JSON.stringify(userData));
}

// Recuperar la información del usuario
let userData = JSON.parse(localStorage.getItem(userId)) || {};
console.log("Te sientes más identificado como: " + (userData.teSentisIdentificado || "No especificado"));
console.log("Estas programando por: " + (userData.razonAprender || "No especificado"));
