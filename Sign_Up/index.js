document.addEventListener("DOMContentLoaded", function() {
    const SignUpForm = document.querySelector('#SignUpForm');
    const botonAceptar = document.getElementById("button");

    connect2Server();

    SignUpForm.addEventListener('submit', async (e) => {
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
        
        postData("register", {mail: mail, user_name: name, password: password}, (data) => {            
            console.log(data);
            if (!data)
            {
                console.log ("Respuesta vacía");
                return alert('El backend dio una respuesta vacía');
            }
            else if (data.result == "ya_existe")
            {
                console.log ("Ya existe");
                return alert('El usuario ya está registrado');
            }
            else if (data.result  == "registro_exitoso")
            {
                console.log ("Registro exitoso. User id: " + data.user_id);                
                sessionStorage.clear;
                sessionStorage.setItem('id_usuario', data.user_id);
                
                alert("Registro exitoso, disfrute de su experiencia");
                window.location.href = '../Formulario-1/index.html';
            }
            else if (data.result  == "error")
            {
                console.log ("Error en el backend");
                return alert('Error en el backend');
            }
            else
            {
                console.log ("Respuesta inesperada: " + data);
                return alert("Respuesta inesperada: " + data);
            }

        });                
    });
});
