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

        Users.push({ username: name, mail: mail, password: password });
        localStorage.setItem('users', JSON.stringify(Users));
        alert("Registro exitoso, disfrute de su experiencia");
        cambioDeHtml();
    });

    function cambioDeHtml() {
        window.location.href = '../Wireframe-23/index.html';
    }
});
