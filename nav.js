document.addEventListener("DOMContentLoaded", function() {
    // Manejo del menú de la barra lateral
    document.getElementById("tresFlechas").addEventListener("click", function() {
        const menu = document.getElementById("miMenu");

        if (menu.classList.contains("mostrar")) {
            menu.classList.remove("mostrar");
            menu.classList.add("ocultar");
        } else {
            menu.classList.remove("ocultar");
            menu.classList.add("mostrar");
        }
        // Cambiar flecha
        if (niveles2.classList.contains("girar")) {
            niveles2.classList.remove("girar");
            niveles2.classList.add("girar2");
        }

        const nivel = document.getElementById("miNivel");
        if (nivel.classList.contains("desplegar")) {
            nivel.classList.remove("desplegar");
            nivel.classList.add("oculto");
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

    // Eventos para los niveles
    niveles.addEventListener("click", function() {
        cambiarFlecha();
        mostrarOcultarNiveles();
    });

    niveles2.addEventListener("click", function() {
        cambiarFlecha();
        mostrarOcultarNiveles();
    });

    document.getElementById('cerrarSesion').addEventListener("click", () => {
        window.location.href='../Presentación/index.html';
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

            actualizarFotoPerfil(base64String);
        };

        if (file) {
            reader.readAsDataURL(file); // Convertir a base64
        }
    });

    // Al cargar la página, recuperar la imagen y mostrarla
    const user = obtenerUsuario();
    const savedImage = user.perfilImagen;

    if (savedImage) {
        imageCircle.style.backgroundImage = `url(${savedImage})`;
        imageSet = true;
    }

    const texto = document.getElementById("nombreUsuario");
    texto.textContent = user.username;
});

    // Redirección al hacer clic en "Inicio"
    document.getElementById("inicio").addEventListener("click", function() {
        // Cambia la URL a la ruta correcta del archivo HTML
        window.location.href = '../../Seleccion_de_niveles-Guia/index.html';
    });

    document.getElementById('cerrarSesion').addEventListener("click", () => {
        // Borra toda la información del sessionStorage
        sessionStorage.clear();
        // Redirige al index.html de la carpeta Presentación
        window.location.href = '../../Presentación/index.html';
    });