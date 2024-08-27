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
    const nivel = document.getElementById("miNivel");
    if (nivel.classList.contains("desplegar")){
        nivel.classList.remove("desplegar")
        nivel.classList.add("oculto")
    }
});

document.getElementById("pantalla").addEventListener("click", function(){
    const menu = document.getElementById("miMenu");

    if (menu.classList.contains("mostrar")){
        menu.classList.remove("mostrar");
        menu.classList.add("ocultar");
    }
})

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

// Función para alternar la flecha
function cambiarFlecha() {
    if (niveles2.classList.contains("girar")) {
        niveles2.classList.remove("girar");
        niveles2.classList.add("girar2");
    } else {
        niveles2.classList.remove("girar2");
        niveles2.classList.add("girar");
    }
}

// Función para mostrar u ocultar el submenú
function mostrarOcultarNiveles() {
    if (miNivel.classList.contains("desplegar")) {
        miNivel.classList.remove("desplegar");
        miNivel.classList.add("oculto");
    } else {
        miNivel.classList.remove("oculto");
        miNivel.classList.add("desplegar");
    }
}

niveles.addEventListener("click", function() {
    cambiarFlecha();
    mostrarOcultarNiveles(); 
});

niveles2.addEventListener("click", function() {
    cambiarFlecha();
    mostrarOcultarNiveles();
});

document.getElementById("html").addEventListener("click", function(){
    window.location='../Wireframe-15/index.html'
})
document.getElementById("js").addEventListener("click", function(){
    window.location='../Wireframe-20/index.html'
})
document.getElementById("css").addEventListener("click", function(){
    window.location='../Wireframe-17/index.html'
})

const imageCircle = document.getElementById('image-circle');
const fileInput = document.getElementById('file-input');
let imageSet = false; 

imageCircle.addEventListener('click', () => {
    if (imageSet) {
        const confirmChange = confirm("¿Estás seguro de que quieres cambiar la imagen?");
        if (!confirmChange) {
            return;
        }
    }
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imageCircle.style.backgroundImage = `url(${e.target.result})`;
        imageSet = true;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const texto = document.getElementById("nombreUsuario");
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        texto.textContent = nombreUsuario;
    } else {
        texto.textContent = "No se ha iniciado sesión";
    }
});
