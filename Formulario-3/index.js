function handleBotonNingunaClick (){    
    handleClick("ninguna"); 
    location.href='../Seleccion_de_niveles-Guia/index.html'   
}

function handleBotonPocaClick (){
    handleClick("poca");
    location.href='../Seleccion_de_niveles-Guia/index.html'
}

function handleBotonMuchaClick (){
    handleClick("mucha");    
    location.href='../Seleccion_de_niveles-Manual/index.html'
}

function handleClick (experiencia)
{
    modificarExperiencia(experiencia);
}