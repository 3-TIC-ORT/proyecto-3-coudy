// Gestión de imagen de perfil
const imageCircle = document.querySelectorAll('.image-circle');
const fileInput = document.querySelectorAll('.file-input');
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

        // Guardar la imagen en base64 en sessionStorage
        const userId = sessionStorage.getItem('id_usuario');
        sessionStorage.setItem(`perfilImagen_${userId}`, base64String); // Cambiar a sessionStorage

        // Recuperar el array de usuarios de localStorage
        const usersString = localStorage.getItem('users');
        let users = JSON.parse(usersString);

        // Buscar el usuario por ID
        const user = users.find(user => user.id === userId);
        if (user) {
            // Agregar o modificar el campo perfilImagen
            user.perfilImagen = base64String;

            // Volver a guardar el array de usuarios en localStorage
            localStorage.setItem('users', JSON.stringify(users));
        }
    };

    if (file) {
        reader.readAsDataURL(file); // Convertir a base64
    }
});

// Al cargar la página, recuperar la imagen y mostrarla
document.addEventListener("DOMContentLoaded", function() {
    const userId = sessionStorage.getItem('id_usuario');
    const savedImage = sessionStorage.getItem(`perfilImagen_${userId}`); // Cambiar a sessionStorage

    if (savedImage) {
        imageCircle.style.backgroundImage = `url(${savedImage})`;
        imageSet = true;
    }

    // Nombre de usuario
    const textos = document.querySelectorAll(".nombreUsuario"); 
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const usuario = Users.find(user => user.id === userId);
    
    textos.forEach((texto) => {
        if (usuario) {
            texto.textContent = usuario.username;
        } else {
            texto.textContent = "Invitado";
        }
    });    
});
