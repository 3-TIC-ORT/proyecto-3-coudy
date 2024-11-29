connect2Server();

function handleBotonProgramadorClick (){    
    handleClick("Programador");    
}

function handleBotonDiversionClick (){
    handleClick("Diversión");    
}

function handleBotonTrabajoClick (){
    handleClick("Trabajo");    
}

function handleBotonOtrosMotivosClick (){
    handleClick("Otros Motivos");
}

function handleClick (razon)
{
    modificarRazonAprender(razon);
    location.href='../Formulario-2/index.html'
}