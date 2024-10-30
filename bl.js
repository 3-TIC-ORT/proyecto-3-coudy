// Manejo del menú de la barra lateral
document.getElementById("tresFlechas").addEventListener("click", function() {
    const menu = document.getElementById("miMenu");

    if (menu.classList.contains("mostrar")) {
        menu.classList.remove("mostrar");
        menu.classList.add("ocultar");
    } else {
        menu.classList.remove("ocultar");
        menu.classList.add("mostrar");
    }
    // Cambiar flecha
    if (niveles2.classList.contains("girar")) {
        niveles2.classList.remove("girar");
        niveles2.classList.add("girar2");
    }

    const nivel = document.getElementById("miNivel");
    if (nivel.classList.contains("desplegar")) {
        nivel.classList.remove("desplegar");
        nivel.classList.add("oculto");
    }
});

// Funciones para mostrar/ocultar la barra lateral y la flecha
let niveles = document.getElementById("niveles");
let niveles2 = document.getElementById("imgNiveles");

function cambiarFlecha() {
    if (niveles2.classList.contains("girar")) {
        niveles2.classList.remove("girar");
        niveles2.classList.add("girar2");
    } else {
        niveles2.classList.remove("girar2");
        niveles2.classList.add("girar");
    }
}

function mostrarOcultarNiveles() {
    const miNivel = document.getElementById("miNivel");
    if (miNivel.classList.contains("desplegar")) {
        miNivel.classList.remove("desplegar");
        miNivel.classList.add("oculto");
    } else {
        miNivel.classList.remove("oculto");
        miNivel.classList.add("desplegar");
    }
}

// Eventos para los niveles
niveles.addEventListener("click", function() {
    cambiarFlecha();
    mostrarOcultarNiveles();
});

niveles2.addEventListener("click", function() {
    cambiarFlecha();
    mostrarOcultarNiveles();
});

// Cierre del menú al hacer clic en la pantalla
document.getElementById("pantalla").addEventListener("click", function() {
    const menu = document.getElementById("miMenu");
    if (menu.classList.contains("mostrar")) {
        menu.classList.remove("mostrar");
        menu.classList.add("ocultar");
    }
});

document.getElementById('cerrarSesion').addEventListener("click", ()=>{
    window.location.href='../Presentación/index.html'

})