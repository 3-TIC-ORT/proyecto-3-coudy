document.addEventListener("DOMContentLoaded", function() {
    const SignUpForm = document.querySelector('#SignUpForm');
    const botonAceptar = document.getElementById("button");

    SignUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (e.submitter !== botonAceptar) {
            return;
        }

        const name = document.querySelector('#name').value;
        const mail = document.querySelector('#mail').value;
        const password = document.querySelector('#password').value;

        if (!name || !mail || !password) {
            return alert('Asegúrate de haber completado todos los espacios');
        }

        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(user => user.mail === mail || user.username === name);

        if (isUserRegistered) {
            return alert('El usuario ya está registrado');
        }

        // Generar un ID único para el usuario
        const userId = generateUniqueId();

        // Guardar la información del usuario en el array de usuarios
        Users.push({ id: userId, username: name, mail: mail, password: password });
        localStorage.setItem('users', JSON.stringify(Users));

        // Crear una entrada en el localStorage para los datos adicionales del usuario
        localStorage.setItem(userId, JSON.stringify({
            numero: "", // Inicialmente vacío, se puede completar más tarde
            razonAprender: "" // Inicialmente vacío, se puede completar más tarde
        }));

        alert("Registro exitoso, disfrute de su experiencia");
        cambioDeHtml();
    });

    function cambioDeHtml() {
        window.location.href = '../Wireframe-23/index.html';
    }

    function generateUniqueId() {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    }
});
