document.addEventListener("DOMContentLoaded", function() {
    const SignUpForm = document.querySelector('#SignUpForm');
    const botonAceptar = document.getElementById("button");

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
            generarCodigo();
            console.log("Guardando el usuario con id: " + userId);
            sessionStorage.setItem('id_usuario', userId);
            loginUsuario(name);
        });
        
        function loginUsuario(nombreUsuario)
        {
            
        }
        function generarCodigo() {    
            let codigo = {
                numero1: Math.floor(Math.random() * 10),
                numero2: Math.floor(Math.random() * 10),
                numero3: Math.floor(Math.random() * 10),
                numero4: Math.floor(Math.random() * 10),
                numero5: Math.floor(Math.random() * 10)
            };
        
            // Redirigir a la página de verificación
            window.location.href = '../Formulario-1/index.html';
        
            let gmail = document.querySelector('#mail').value; // Asegurarte de obtener el valor correctamente
            let objeto = { gmail:gmail, codigo:codigo }; // Crear el objeto correctamente
            sessionStorage.setItem('objeto', JSON.stringify(objeto)); // Guardar el objeto en el sessionStorage
            postData("gmail", objeto); // Enviar los datos al servidor
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

        // Guardar la sesión del usuario registrado
        sessionStorage.setItem('currentUser', JSON.stringify({ id: userId, username: name, mail: mail }));

        alert("Registro exitoso, disfrute de su experiencia");
        generarCodigo();
    });
        
        

    function generateUniqueId() {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    }
