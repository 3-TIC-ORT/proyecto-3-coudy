function cambiarArchivo (){
    window.location.href = '../Wireframe-6/index.html'
}

function cambiarArchivo2 (){
    window.location.href = '../Wireframe-5/index.html'
}
function cambioAlWireframe_2 (){
    location.href='../Wireframe-2/index.html'
    variable ++;
}

localStorage.setItem("variable", 0);

function cambioAlWireframe_3 (){
    location.href='../Wireframe-3/index.html'
    variable =  2;
}

function cambioAlWireframe_4 (){
    console.log(variable + "Hola");
    variable = localStorage.getItem("variable");
    location.href='../Wireframe-4/index.html'

    console.log(variable + "chau");
    variable = 3;
    console.log(variable);
}

if (variable === 1){
    document.getElementById("boton-dependeQueEligio").addEventListener("click", cambiarArchivo)
}

else if (variable === 2 || variable === 3){
    document.getElementById("boton-dependeQueEligio").addEventListener("click", cambiarArchivo2)
}