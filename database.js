function modificarRazonAprender(nuevaRazon)
{
    guardarDatosUsuario('razonAprender', nuevaRazon);
}

function modificarIdentificacion(nuevaIdentificacion)
{
    guardarDatosUsuario('teSentisIdentificado', nuevaIdentificacion)
}

function modificarExperiencia(nuevaExperiencia)
{
    guardarDatosUsuario('experienciaProgramacion', nuevaExperiencia)
}

function actualizarFotoPerfil(nuevaFotoBase64)
{
    guardarDatosUsuario("perfilImagen",nuevaFotoBase64);
}

function obtenerFotoPerfil()
{
    obtenerDatosUsuario("perfilImagen");
}

function obtenerDatosUsuario(key)
{
    let userId = sessionStorage.getItem('id_usuario');

    if (userId)
    {        
        const users = JSON.parse(localStorage.getItem('users'));
        if (users)
        {
            const user = users.find(user => user.id === userId);

            if (user)
            {
                return user[key];
            } 
            else 
            {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
            }           
        }
        else
        {
            console.log("users no se encontro en localStorage");
        }
    }
    else
    {
        console.log("id_usuario no se encontro en sessionStorage");
    }    
}

function obtenerUsuario()
{
    let userId = sessionStorage.getItem('id_usuario');

    if (userId)
    {        
        const users = JSON.parse(localStorage.getItem('users'));
        if (users)
        {
            const user = users.find(user => user.id === userId);

            if (user)
            {
                return user;
            } 
            else 
            {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
            }           
        }
        else
        {
            console.log("users no se encontro en localStorage");
        }
    }
    else
    {
        console.log("id_usuario no se encontro en sessionStorage");
    }    
}
function guardarDatosUsuario(key, value) 
{
    let userId = sessionStorage.getItem('id_usuario');

    if (userId)
    {        
        const users = JSON.parse(localStorage.getItem('users'));
        if (users)
        {
            // Buscar el usuario por ID
            let userIndex = users.findIndex(user => user.id === userId);

            if (userIndex !== -1) 
            {
                console.log("Guardando datos usuario. Key=" + key + ", value=" + value);
                
                // Actualizar el campo en el usuario
                users[userIndex][key] = value;
                
                // Guardar el arreglo completo de usuarios actualizado en localStorage
                localStorage.setItem('users', JSON.stringify(users));
            } 
            else 
            {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
            }           
        }
        else
        {
            console.log("users no se encontro en localStorage");
        }
    }
    else
    {
        console.log("id_usuario no se encontro en sessionStorage");
    }    
}
    const userId = sessionStorage.getItem('id_usuario'); // Cambia 'id_usuario' por el nombre correcto

if (!userId) {
    window.location.href = '../../Presentación/index.html';
}