document.addEventListener("DOMContentLoaded", function() {
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