function botonSecundaria (){
    location.href='../Formulario-3/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Estudiante de Secundaria");
}

function botonUniversidad (){
    location.href='../Formulario-3/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Estudiante de Universidad")
}

function botonTrabajador (){
    location.href='../Formulario-3/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Trabajador")
}

function botonNinguna (){
    location.href='../Formulario-3/index.html'
    guardarDatosUsuario(userId, 'teSentisIdentificado', "Otro")
}

function botonProgramador (){
    location.href='../Formulario-2/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Programador")
}

function botonDiversion (){
    location.href='../Formulario-2/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Diversión")
}

function botonTrabajo (){
    location.href='../Formulario-2/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Trabajo")
}

function botonOtrosMotivos (){
    location.href='../Formulario-2/index.html'
    guardarDatosUsuario(userId, 'razonAprender', "Otros motivos")
}

let teSentisIdentificado = String(localStorage.getItem('teSentisIdentificado'));
let razonAprender = String(localStorage.getItem('razonAprender'));

let userId = 'el-id-del-usuario-registrado';

function guardarDatosUsuario(userId, key, value) {
    let userData = JSON.parse(localStorage.getItem(userId)) || {};
    userData[key] = value;
    localStorage.setItem(userId, JSON.stringify(userData));
}

let userData = JSON.parse(localStorage.getItem(userId)) || {};
console.log("Te sientes más identificado como: " + (userData.teSentisIdentificado || "No especificado"));
console.log("Estas programando por: " + (userData.razonAprender || "No especificado"));