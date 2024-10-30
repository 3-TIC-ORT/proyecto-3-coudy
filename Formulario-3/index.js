function handleBotonNingunaClick (){    
    handleClick("ninguna");    
}

function handleBotonPocaClick (){
    handleClick("poca");
}

function handleBotonMuchaClick (){
    handleClick("mucha");    
}

function handleClick (experiencia)
{
    modificarExperiencia(experiencia);
    location.href='../Seleccion_de_niveles-Guia/index.html'
}