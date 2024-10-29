function cambioAlWireframe_2() {
    location.href = '../Wireframe-2/index.html';
    sessionStorage.setItem('i', 1)
}

function cambioAlWireframe_3() {
    location.href = '../Wireframe-3/index.html';
    sessionStorage.setItem('i', 2);
}

function cambioAlWireframe_4() {
    location.href = '../Wireframe-4/index.html';
    sessionStorage.setItem('i', 3);
}

function cambiarArchivo() {
    window.location.href = '../Wireframe-6/index.html';
}

function cambiarArchivo2() {
    window.location.href = '../Wireframe-5/index.html';
}

let i = Number(sessionStorage.getItem('i')) || 0;

if (i === 1) {
    document.getElementById("boton-dependeQueEligio").addEventListener("click", cambiarArchivo);
} else if (i === 2 || i === 3) {
    document.getElementById("boton-dependeQueEligio").addEventListener("click", cambiarArchivo2);
}