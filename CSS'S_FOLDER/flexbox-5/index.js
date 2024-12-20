let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');
const siguienteBtn = document.querySelector('.siguiente');
const relleno = document.querySelector('.relleno');

function mover() {
    objMover.classList.remove('JUScentrar', 'JUSend', 'JUSstart', 'JUSbetween', 'JUSaround', 'JUSevenly', 'ALIGcentrar', 'ALIGend', 'ALIGstart', 'ALIGbaseline', 'ALIGstrech');
    siguienteBtn.classList.remove('pulse-loop');
    const valorCodigo = codigo.value.trim().split('\n');
    let nivelCompletado = false;
    if(valorCodigo){
        localStorage.setItem('codigo-textarea', valorCodigo);  
    }

    if (obtenerNivelCssAlcanzado()>=16) {
        nivelCompletado = true;
    }

    valorCodigo.forEach((propiedad) => {
        propiedad = propiedad.trim();

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
    });

    if (nivelCompletado) {
        siguienteBtn.classList.add('pulse');
        setTimeout(() => {
            siguienteBtn.classList.add('pulse-loop');
        }, 1000);
    }
    verificarCodigo();
}

function verificarCodigo(){
    const valorCodigo = codigo.value.trim();

    const contenidoNormalizado = valorCodigo.replace(/\s+/g, '').toLowerCase();

    if (
        contenidoNormalizado.includes('align-items:center;') && 
        contenidoNormalizado.includes('justify-content:center;')
    ) {
        modificarNivelCssAlcanzado(16);
    }
}

codigo.addEventListener('input', mover);

siguienteBtn.addEventListener('animationend', (event) => {
    if (event.animationName === 'shake') {
        relleno.classList.remove('shake');
    }
});

function cambiarCursor() {
    if (obtenerNivelCssAlcanzado()>=16) {
        siguienteBtn.style.cursor = 'pointer';
    }
}

siguienteBtn.addEventListener('click', async () => {
    if (await obtenerNivelCssAlcanzado()>=16) {
        window.location.href = '../flexbox-6/index.html';
    } else {
        const valorCodigo = codigo.value.trim();
        if (valorCodigo.includes("justify-content: center;") && valorCodigo.includes("align-items: center;"))
        {
            await modificarNivelCssAlcanzado(16);
            window.location.href='../flexbox-6/index.html'
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
});

const cuadradito = document.querySelector('.cuadradito');
const mimi = document.querySelector('.mimi');
const cuadradito2 = document.querySelector('.cuadraditoalig');
const mimi2 = document.querySelector('.mimi2');
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

cuadradito.addEventListener('mouseover', () => {
    mimi.style.display = 'block';
});

cuadradito.addEventListener('click', () => {
    mimi.style.display = mimi.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function (event) {
    if (event.target !== cuadradito && !cuadradito.contains(event.target) && event.target !== mimi) {
        mimi.style.display = "none";
    }
};

cuadradito2.addEventListener('mouseover', () => {
    mimi2.style.display = 'block';
});

cuadradito2.addEventListener('click', () => {
    mimi2.style.display = mimi2.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function (event) {
    if (event.target !== cuadradito2 && !cuadradito2.contains(event.target) && event.target !== mimi2) {
        mimi2.style.display = "none";
    }
};

manejarOpcionesMimi(mimi);
manejarOpcionesMimi(mimi2);

cambiarCursor();