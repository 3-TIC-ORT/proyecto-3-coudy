connect2Server();

function handleBotonSecundariaClick (){    
    handleClick("Estudiante de Secundaria");    
}

function handleBotonUniversidadClick (){
    handleClick("Estudiante de Universidad");    
}

function handleBotonTrabajadorClick (){
    handleClick("Trabajador");    
}

function handleBotonNingunaClick (){
    handleClick("Otro");
}

function handleClick (identificacion)
{
    modificarIdentificacion(identificacion);
    location.href='../Formulario-3/index.html'
}