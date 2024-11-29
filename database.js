function modificarRazonAprender(nuevaRazon) {
    guardarDatosUsuario('razonAprender', nuevaRazon);
}

function modificarIdentificacion(nuevaIdentificacion) {
    guardarDatosUsuario('teSentisIdentificado', nuevaIdentificacion);
}

function modificarExperiencia(nuevaExperiencia) {
    guardarDatosUsuario('experienciaProgramacion', nuevaExperiencia);
}

function obtenerExperiencia() {
    return obtenerDatosUsuario("experienciaProgramacion");    
}

function modificarNivelHtmlAlcanzado(nuevoNivel) {
    if(nuevoNivel > obtenerNivelHtmlAlcanzado())
    guardarDatosUsuario("nivelHtmlAlcanzado", nuevoNivel);
}

function modificarNivelCssAlcanzado(nuevoNivel) {
    if(nuevoNivel > obtenerNivelCssAlcanzado())
    guardarDatosUsuario("nivelCssAlcanzado", nuevoNivel);
}

function modificarNivelJsAlcanzado(nuevoNivel) {
    if(nuevoNivel > obtenerNivelJsAlcanzado())
    guardarDatosUsuario("nivelJsAlcanzado", nuevoNivel);
}

function obtenerAnimacionFinished(tipoAnimacion)
{
    return obtenerDatosUsuario("animacion" + tipoAnimacion + "Finished") || false;
}

function modificarAnimacionFinished(tipoAnimacion, nuevoValor)
{
    guardarDatosUsuario("animacion" + tipoAnimacion + "Finished", nuevoValor);    
}

function actualizarFotoPerfil(nuevaFotoBase64) {
    guardarDatosUsuario("perfilImagen", nuevaFotoBase64);
}

function obtenerNivelHtmlAlcanzado() {
    const nivel = obtenerDatosUsuario("nivelHtmlAlcanzado");
    return nivel ?? 0;
}

function obtenerNivelCssAlcanzado() {
    const nivel = obtenerDatosUsuario("nivelCssAlcanzado");
    return nivel ?? 0;
}

function obtenerNivelJsAlcanzado() {
    const nivel = obtenerDatosUsuario("nivelJsAlcanzado");
    return nivel ?? 0;
}

function obtenerFotoPerfil() {
    return obtenerDatosUsuario("perfilImagen");
}

function obtenerDatosUsuario_localstorage(key) {
    let userId = sessionStorage.getItem('id_usuario');

    if (userId) {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            const user = users.find(user => user.id === userId);
            if (user) {
                return user[key];
            } else {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
            }
        } else {
            console.log("users no se encontro en localStorage");
        }
    } else {
        console.log("id_usuario no se encontro en sessionStorage");
    }
}
function obtenerDatosUsuario(key) {
    let userId = sessionStorage.getItem('id_usuario');
    if (!userId)
    {
        console.log("id_usuario no se encontro en sessionStorage");
        return;
    }

    postData("get_user", {user_id: userId}, (user) => 
        {
            if (!user)
            {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
                return;
            }
            return user[key];
        }); 
}

function obtenerUsuario() {
    let userId = sessionStorage.getItem('id_usuario');
    if (!userId)
    {
        console.log("id_usuario no se encontro en sessionStorage");
        return;
    }

    postData("get_user", {user_id: userId}, (user) => 
        {
            if (!user)
            {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
                return;
            }
            return user;
        }); 
}

function obtenerUsuario_localstorage() {
    let userId = sessionStorage.getItem('id_usuario');

    if (userId) {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            const user = users.find(user => user.id === userId);
            if (user) {
                return user;
            } else {
                console.log("El usuario id " + userId + " no se encontró en la base de datos");
            }
        } else {
            console.log("users no se encontro en localStorage");
        }
    } else {
        console.log("id_usuario no se encontro en sessionStorage");
    }
}

function guardarDatosUsuario(key, value) {
    let userId = sessionStorage.getItem('id_usuario');

    if (!userId)
        {
            console.log("id_usuario no se encontro en sessionStorage");
            return;
        }
    
        postData("update_user", {user_id: userId, key: key, new_value: value}, (result) => 
            {
                if (result.error)
                {
                    console.log("Error en el backend actualizando los datos del usuario: ?", [result.error]);                    
                }                                
            }); 
}

    function guardarDatosUsuario_locastorage(key, value) {
        let userId = sessionStorage.getItem('id_usuario');
    
        if (userId) {
            const users = JSON.parse(localStorage.getItem('users'));
            if (users) {
                let userIndex = users.findIndex(user => user.id === userId);
    
                if (userIndex !== -1) {
                    console.log("Guardando datos usuario. Key=" + key + ", value=" + value);
                    users[userIndex][key] = value;
                    localStorage.setItem('users', JSON.stringify(users));
                } else {
                    console.log("El usuario id " + userId + " no se encontró en la base de datos");
                }
            } else {
                console.log("users no se encontro en localStorage");
            }
        } else {
            console.log("id_usuario no se encontro en sessionStorage");
        }
}
