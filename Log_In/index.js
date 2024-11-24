document.addEventListener("DOMContentLoaded", function() {
    const logInForm = document.querySelector('#logInForm');
    const botonAcceder = document.getElementById("boton-acceder");
    const recuerdameCheckbox = document.getElementById("recuerdame");
    const mailInput = document.querySelector('#mail');
    const passwordInput = document.querySelector('#password');



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

        //localStorage.setItem('nombreUsuario', validUser.username);
        sessionStorage.setItem('id_usuario', validUser.id);
        const experienciaProgramacion = obtenerDatosUsuario("experienciaProgramacion");
        if (experienciaProgramacion === 'ninguna') {
            alert(`Bienvenido de nuevo ${validUser.username}`);
            window.location.href = '../Seleccion_de_niveles-Guia/index.html';
        } else if (experienciaProgramacion === 'poca') {
            alert(`Bienvenido de nuevo ${validUser.username}`);
            window.location.href = '../Seleccion_de_niveles-Guia/index.html'; 
        } else if (experienciaProgramacion === 'mucha') {
            alert(`Bienvenido de nuevo ${validUser.username}`);
            window.location.href = '../Seleccion_de_niveles-Manual/index.html'; 
        } else {
            alert(`Bienvenido de nuevo ${validUser.username}, no se ha guardado correctamente la selección de cuanto sabe de programación, por favor completela de nuevo.`);
            window.location.href = '../Formulario-3/index.html';
        }
    });
});