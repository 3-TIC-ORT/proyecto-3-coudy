document.addEventListener("DOMContentLoaded", function() {
    const SignUpForm = document.querySelector('#SignUpForm');
    const botonAceptar = document.getElementById("button");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("emojiojo");
        // Toggle password visibility
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? '🙈' : '👁️'; // Cambiar el icono
        });
    
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

    localStorage.setItem('gmail', mail);

    function generateUniqueId() {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    }
});

function adjustInputWidth() {
    const passwordInput = document.querySelector('.input-contraseña');
    const span = document.createElement('span');
    document.body.appendChild(span);
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'pre';
    span.style.font = getComputedStyle(passwordInput).font;
    span.textContent = passwordInput.value || passwordInput.placeholder;
    passwordInput.style.width = `${Math.max(span.offsetWidth + 40, 200)}px`; // 40px para el espacio del icono
    document.body.removeChild(span);
}

document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector('.input-contraseña');
    passwordInput.addEventListener('input', adjustInputWidth);
    adjustInputWidth(); // Ajustar el ancho al cargar
});
