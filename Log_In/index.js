document.addEventListener("DOMContentLoaded", function() {
    const logInForm = document.querySelector('#logInForm');
    const botonAcceder = document.getElementById("boton-acceder");
    const recuerdameCheckbox = document.getElementById("recuerdame");
    const mailInput = document.querySelector('#mail');
    const passwordInput = document.querySelector('#password');
    const togglePassword = document.getElementById("emojiOjo");

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈'; // Cambiar el icono
    });

    // Cargar datos guardados si existe
    if (localStorage.getItem('recuerdame') === 'true') {
        mailInput.value = localStorage.getItem('mail');
        passwordInput.value = localStorage.getItem('password');
        recuerdameCheckbox.checked = true;
    }

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (e.submitter !== botonAcceder) {
            return;
        }

        const mailOrUsername = mailInput.value;
        const password = passwordInput.value;

        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = Users.find(user => 
          (user.mail === mailOrUsername || user.username === mailOrUsername) && user.password === password
        );

        if (!validUser) {
            return alert("Usuario y/o contraseña incorrectos");
        }
    
        if (!mailOrUsername || !password) {
            return alert('Asegúrate de haber completado todos los espacios');
        }

        if (recuerdameCheckbox.checked) {
            localStorage.setItem('recuerdame', 'true');
            localStorage.setItem('mail', mailOrUsername);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('recuerdame');
            localStorage.removeItem('mail');
            localStorage.removeItem('password');
        }

        alert(`Bienvenido de nuevo ${validUser.username}`); // Mensaje personalizado
        window.location.href = '../Wireframe-23/index.html';
    });
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
