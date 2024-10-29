function sumar(){
    sessionStorage.setItem('volver', 2)
}

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
        niveles2.classList.remove("girar");
        niveles2.classList.add("girar2");
    }

    const nivel = document.getElementById("miNivel");
    if (nivel.classList.contains("desplegar")){
        nivel.classList.remove("desplegar");
        nivel.classList.add("oculto");
    }
});

let inicio = document.getElementById("imgInicio")
let inicio2 = document.getElementById("inicio")
let reglas = document.getElementById("imgReglas")
let reglas2 = document.getElementById("reglas")
document.getElementById("pantalla").addEventListener("click", function() {
    const menu = document.getElementById("miMenu");

    if (menu.classList.contains("mostrar")) {
        menu.classList.remove("mostrar");
        menu.classList.add("ocultar");
    }
});

// Funciones para mostrar/ocultar la barra lateral y la flecha
let niveles = document.getElementById("niveles");
let niveles2 = document.getElementById("imgNiveles");

function cambiarFlecha() {
    if (niveles2.classList.contains("girar")) {
        niveles2.classList.remove("girar");
        niveles2.classList.add("girar2");
    } else {
        niveles2.classList.remove("girar2");
        niveles2.classList.add("girar");
    }
}

function mostrarOcultarNiveles() {
    const miNivel = document.getElementById("miNivel");
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

// Redireccionamientos de botones
document.getElementById("html").addEventListener("click", function() {
    window.location.href = '../HTML\'S_FOLDER/HTML-1/index.html'
        localStorage.setItem('volver-wi', 1)
});

document.getElementById("js").addEventListener("click", function() {
    window.location.href = '../CSS\'S_FOLDER/CSS-1/index.html';
        localStorage.setItem('volver-wi', 2)
});

document.getElementById("css").addEventListener("click", function() {
    window.location.href = '../JS\'S_FOLDER/JS-1/index.html';
        localStorage.setItem('volver-wi', 3)
});

// Gestión de imagen de perfil
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
        const base64String = e.target.result; // La imagen en base64

        // Establecer la imagen como fondo del círculo
        imageCircle.style.backgroundImage = `url(${base64String})`;
        imageSet = true;

        // Guardar la imagen en base64 en localStorage
        localStorage.setItem('perfilImagen', base64String);
    };

    if (file) {
        reader.readAsDataURL(file); // Convertir a base64
    }
});

// Al cargar la página, recuperar la imagen y mostrarla
document.addEventListener("DOMContentLoaded", function() {
    const savedImage = localStorage.getItem('perfilImagen');

    if (savedImage) {
        imageCircle.style.backgroundImage = `url(${savedImage})`;
        imageSet = true;
    }

    // Nombre de usuario
    const texto = document.getElementById("nombreUsuario");
    //const nombreUsuario = localStorage.getItem('nombreUsuario');

    // Recuperar el userId del sessionStorage
    const userId = sessionStorage.getItem('id_usuario');

    console.log("Buscando el user con el id: " + userId);
    // Buscar el usuario en el array Users
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    usuario = Users.find(user => user.id === userId);
    
    if (usuario) {
		console.log("Nombre de usuario: " + usuario.username);
        texto.textContent = usuario.username;
    } else {
		console.log("Nombre de usuario: Undefined");
        texto.textContent = "Invitado";
    }
});
// Evento para cerrar sesión
document.getElementById("cerrarSesion").addEventListener("click", function() {
    // Cambiar el estado de la sesión a "false"
    localStorage.setItem('sesionActiva', 'false');
    
    // Redirigir a la página de login
    window.location.href = 'login.html'; // Cambia esto a la ruta correcta
});

// Evento para cerrar sesión
document.getElementById("cerrarSesion").addEventListener("click", function() {
    // Cambiar el estado de la sesión a "false"
    localStorage.setItem('sesionActiva', 'false');
    
    // Redirigir a la página de login
    window.location.href = 'Log_in.html'; // Cambia esto a la ruta correcta
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const base64String = e.target.result; // La imagen en base64

        // Establecer la imagen como fondo del círculo
        imageCircle.style.backgroundImage = `url(${base64String})`;
        imageSet = true;

        // Guardar la imagen en base64 en localStorage
        localStorage.setItem('perfilImagen', base64String);

        // Recuperar el userId del sessionStorage y actualizar la entrada del usuario
        const userId = sessionStorage.getItem('id_usuario');
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const usuario = Users.find(user => user.id === userId);

        if (usuario) {
            usuario.perfilImagen = base64String; // Guardar la imagen en el perfil del usuario
            localStorage.setItem('users', JSON.stringify(Users)); // Actualizar el array en localStorage
        }
    };

    if (file) {
        reader.readAsDataURL(file); // Convertir a base64
    }
});
