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

        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(user => user.mail === mail);

        if (isUserRegistered) {
            return alert('El usuario ya está registrado');
        }

        Users.push({ name: name, mail: mail, password: password });
        localStorage.setItem('users', JSON.stringify(Users));
        alert("Registro exitoso");
        cambioDeHtml();
    });

    function cambioDeHtml() {
        window.location.href = '../Wireframe-23/index.html';
    }
});
