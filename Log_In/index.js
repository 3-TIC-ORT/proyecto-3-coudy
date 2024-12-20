document.addEventListener("DOMContentLoaded", function() {
    const logInForm = document.querySelector('#logInForm');
    const botonAcceder = document.getElementById("boton-acceder");
    const recuerdameCheckbox = document.getElementById("recuerdame");
    const mailInput = document.querySelector('#mail');
    const passwordInput = document.querySelector('#password');

    connect2Server();

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

        if (!mailOrUsername || !password) {
            return alert('Asegúrate de haber completado todos los espacios');
        }
        
        postData("login", {mail_or_user: mailOrUsername, password: password}, (data) => {            
            if (!data)
            {
                console.log ("Respuesta vacía");
                return alert('El backend dio una respuesta vacía');
            }
            if (data.user)
            {
                console.log ("Usuario encontrado: " + JSON.stringify(data.user));
                sessionStorage.setItem('id_usuario', data.user.id);                
                const experienciaProgramacion = data.user.experienciaProgramacion;
                if (experienciaProgramacion === 'ninguna') {
                    alert(`Bienvenido de nuevo ${data.user.username}`);
                    window.location.href = '../Seleccion_de_niveles-Guia/index.html';
                } else if (experienciaProgramacion === 'poca') {
                    alert(`Bienvenido de nuevo ${data.user.username}`);
                    window.location.href = '../Seleccion_de_niveles-Guia/index.html'; 
                } else if (experienciaProgramacion === 'mucha') {
                    alert(`Bienvenido de nuevo ${data.user.username}`);
                    window.location.href = '../Seleccion_de_niveles-Manual/index.html'; 
                } else {
                    alert(`Bienvenido de nuevo ${data.user.username}, no se ha guardado correctamente la selección de cuanto sabe de programación, por favor completela de nuevo.`);
                    window.location.href = '../Formulario-3/index.html';
                }
            }
            else
            {
                return alert("Usuario y/o contraseña incorrectos");
            }
        });

        if (recuerdameCheckbox.checked) {
            localStorage.setItem('recuerdame', 'true');
           
        } else {
            localStorage.removeItem('recuerdame');
          
        }        
    });
});