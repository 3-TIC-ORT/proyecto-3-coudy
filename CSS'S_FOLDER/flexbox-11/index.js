let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');
const siguienteBtn = document.querySelector('.siguiente');
const relleno = document.querySelector('.relleno');
let verify = Number(localStorage.getItem('finalLevelCSS-Passed') || 0);

function mover() {
    objMover.classList.remove(
        'JUScentrar', 'JUSend', 'JUSstart', 'JUSbetween', 'JUSaround', 'JUSevenly',
        'ALIGcentrar', 'ALIGend', 'ALIGstart', 'ALIGbaseline', 'ALIGstrech',
        'FLEXrow', 'FLEXrow-reverse', 'FLEXcolumn', 'FLEXcolumn-reverse',
        'WRAPnowrap', 'WRAPwrap', 'WRAPwrap-reverse'
    );
    siguienteBtn.classList.remove('pulse-loop');

    const valorCodigo = codigo.value.trim().split('\n');
    let nivelCompletado = false;

    /*if (valorCodigo) {
        localStorage.setItem('codigo-textarea4', valorCodigo);
    }*/

        if(obtenerNivelCssAlcanzado()>=22) {
        nivelCompletado = true;
    }

    // Aplica las clases según el valor ingresado
    valorCodigo.forEach((propiedad) => {
        propiedad = propiedad.trim();

        // Justify-content
        if (propiedad === "justify-content: center" || propiedad === "justify-content: center;") {
            objMover.classList.add('JUScentrar');
        } else if (propiedad === "justify-content: flex-end" || propiedad === "justify-content: flex-end;") {
            objMover.classList.add('JUSend');
        } else if (propiedad === "justify-content: flex-start" || propiedad === "justify-content: flex-start;") {
            objMover.classList.add('JUSstart');
        } else if (propiedad === "justify-content: space-between" || propiedad === "justify-content: space-between;") {
            objMover.classList.add('JUSbetween');
        } else if (propiedad === "justify-content: space-around" || propiedad === "justify-content: space-around;") {
            objMover.classList.add('JUSaround');
            siguienteBtn.style.cursor = 'pointer';
        } else if (propiedad === "justify-content: space-evenly" || propiedad === "justify-content: space-evenly;") {
            objMover.classList.add('JUSevenly');
        }

        // Align-items
        if (propiedad === "align-items: center" || propiedad === "align-items: center;") {
            objMover.classList.add('ALIGcentrar');
        } else if (propiedad === "align-items: flex-end" || propiedad === "align-items: flex-end;") {
            objMover.classList.add('ALIGend');
        } else if (propiedad === "align-items: flex-start" || propiedad === "align-items: flex-start;") {
            objMover.classList.add('ALIGstart');
        } else if (propiedad === "align-items: baseline" || propiedad === "align-items: baseline;") {
            objMover.classList.add('ALIGbaseline');
        } else if (propiedad === "align-items: stretch" || propiedad === "align-items: stretch;") {
            objMover.classList.add('ALIGstrech');
        }

        let imagenesss = document.querySelectorAll('.imagenesss');
        // Flex-direction
        if (propiedad === "flex-direction: row" || propiedad === "flex-direction: row;") {
            objMover.classList.add('FLEXrow');
        } else if (propiedad === "flex-direction: row-reverse" || propiedad === "flex-direction: row-reverse;") {
            objMover.classList.add('FLEXrow-reverse');
        } else if (propiedad === "flex-direction: column" || propiedad === "flex-direction: column;") {
            objMover.classList.add('FLEXcolumn');
            imagenesss.forEach((imagen)=>{ imagen.classList.add('espaciado', 'sacarEspacio') })
        } else if (propiedad === "flex-direction: column-reverse" || propiedad === "flex-direction: column-reverse;") {
            objMover.classList.add('FLEXcolumn-reverse');
            imagenesss.forEach((imagen)=>{ imagen.classList.add('espaciado', 'sacarEspacio') })
        }

        // Flex-wrap
        if (propiedad === "flex-wrap: nowrap" || propiedad === "flex-wrap: nowrap;") {
            objMover.classList.add('WRAPnowrap');
        } else if (propiedad === "flex-wrap: wrap" || propiedad === "flex-wrap: wrap;") {
            objMover.classList.add('WRAPwrap');
            imagenesss.forEach((imagen)=>{ imagen.classList.add('espaciado') })
        } else if (propiedad === "flex-wrap: wrap-reverse" || propiedad === "flex-wrap: wrap-reverse;") {
            objMover.classList.add('WRAPwrap-reverse');
            imagenesss.forEach((imagen)=>{ imagen.classList.add('espaciado') })
        }
    });

    if (nivelCompletado) {
        siguienteBtn.classList.add('pulse');
        siguienteBtn.style.cursor='pointer'
        siguienteBtn.addEventListener('click', volverr)
        setTimeout(() => {
            siguienteBtn.classList.add('pulse-loop');
        }, 1000);
    }

    verificarCodigo();
}
function verificarCodigo() {
    const valorCodigo = codigo.value.trim();

    const contenidoNormalizado = valorCodigo
        .replace(/\s+/g, '')  // Elimina todos los espacios en blanco
        .toLowerCase();  // Convierte todo a minúsculas

    // Ahora las condiciones no dependen de los puntos y comas
    const cumpleCondiciones = 
        contenidoNormalizado.includes('justify-content:center') &&
        contenidoNormalizado.includes('flex-direction:column-reverse') &&
        contenidoNormalizado.includes('flex-wrap:wrap-reverse') &&
        contenidoNormalizado.includes('align-items:center');

    if (cumpleCondiciones) {
        modificarNivelCssAlcanzado(22);
    }
}

codigo.addEventListener('input', ()=>{
    mover();
    verificarCodigo();
});

siguienteBtn.addEventListener('animationend', (event) => {
    if (event.animationName === 'shake') {
        relleno.classList.remove('shake');
    }
});

function cambiarCursor() {
    if (verify === 1) {
        siguienteBtn.style.cursor = 'pointer';
    }
}

function volverr(){
    if(obtenerNivelCssAlcanzado() == 22) 
        {
            let experienciaProgramacion = obtenerExperiencia();
                            
            if(experienciaProgramacion === "poca" || experienciaProgramacion === "ninguna") 
            {
                window.location.href='../../Seleccion_de_niveles-Guia/index.html'
            } 
            else 
            {
                window.location.href='../../Seleccion_de_niveles-Manual/index.html'
            }
        } 
        else 
        {
            siguienteBtn.classList.remove('pulse-loop');
            relleno.classList.remove('shake');
            setTimeout(() => {
                relleno.classList.add('shake');
            }, 10);
        }
}

siguienteBtn.addEventListener('click', volverr);

const cuadradito = document.querySelector('.wrap');
const mimi = document.querySelector('.mimi');
const cuadradito2 = document.querySelector('.direction');
const mimi2 = document.querySelector('.mimi2');
const cuadradito3 = document.querySelector('.justify');
const mimi3 = document.querySelector('.mimi-Jus');
const cuadradito4 = document.querySelector('.align');
const mimi4 = document.querySelector('.mimi-Align');
const textarea = document.querySelector('#code');

function agregarOpcion(opcion) {
    const value = opcion.getAttribute('value');
    const currentValue = textarea.value.trim();

    if (!currentValue.includes(value)) {
        if (currentValue) {
            textarea.value = currentValue + '\n' + value;
        } else {
            textarea.value = value + ';';
        }
    }

    mimi.style.display = 'none';
    mimi2.style.display = 'none';
    mimi3.style.display = 'none';
    mimi4.style.display = 'none';

    mover();
}

function manejarOpcionesMimi(mimiElement) {
    const opcionesMimi = mimiElement.querySelectorAll('.opciones');

    opcionesMimi.forEach(opcion => {
        opcion.addEventListener('click', () => {
            agregarOpcion(opcion);
        });
    });
}

cuadradito.addEventListener('click', () => {
    mimi.style.display = mimi.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function (event) {
    if (event.target !== cuadradito && !cuadradito.contains(event.target) && event.target !== mimi) {
        mimi.style.display = "none";
    }
};

cuadradito2.addEventListener('click', () => {
    mimi2.style.display = mimi2.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function (event) {
    if (event.target !== cuadradito2 && !cuadradito2.contains(event.target) && event.target !== mimi2) {
        mimi2.style.display = "none";
    }
};

cuadradito3.addEventListener('click', () => {
    mimi3.style.display = mimi3.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function (event) {
    if (event.target !== cuadradito3 && !cuadradito3.contains(event.target) && event.target !== mimi3) {
        mimi3.style.display = "none";
    }
};

cuadradito4.addEventListener('click', () => {
    mimi4.style.display = mimi4.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function (event) {
    if (event.target !== cuadradito4 && !cuadradito4.contains(event.target) && event.target !== mimi4) {
        mimi4.style.display = "none";
    }
};


manejarOpcionesMimi(mimi);
manejarOpcionesMimi(mimi2);
manejarOpcionesMimi(mimi3);
manejarOpcionesMimi(mimi4);

cambiarCursor();