let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');
const siguienteBtn = document.querySelector('.siguiente');
const relleno = document.querySelector('.relleno');

function mover() {
    objMover.classList.remove('JUScentrar', 'JUSend', 'JUSbetween', 'JUSaround', 'JUSevenly', 'ALIGcentrar');
    siguienteBtn.classList.remove('pulse-loop');
    const valorCodigo = codigo.value.trim().split(';');

    let nivelCompletado = false;

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
    });

    if (nivelCompletado) {
        siguienteBtn.classList.add('pulse');
        setTimeout(() => {
            siguienteBtn.classList.add('pulse-loop');
        }, 1000);
    }
}

codigo.addEventListener('input', mover);

siguienteBtn.addEventListener('animationend', (event) => {
    if (event.animationName === 'shake') {
        relleno.classList.remove('shake');
    }
});

function cambiarCursor(){
    if(obtenerNivelCssAlcanzado()>=14){
        siguienteBtn.style.cursor = 'pointer';
    }
}

siguienteBtn.addEventListener('click', async () => {
    if (await obtenerNivelCssAlcanzado()>=14) {
        window.location.href = '../flexbox-4/index.html';
    } else {
        const valorCodigo = codigo.value.trim();
        if (valorCodigo == "justify-content: center;")
        {
            await modificarNivelCssAlcanzado(14);
            window.location.href='../flexbox-4/index.html'
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

cuadradito.addEventListener('mouseover', () => {
    mimi.style.display = 'block';
});

cuadradito.addEventListener('click', () => {
    if (mimi.style.display === 'block') {
        mimi.style.display = 'none'; 
    } else {
        mimi.style.display = 'block'; 
    }
});

window.onclick = function(event) {
    if (event.target !== cuadradito && !cuadradito.contains(event.target) && event.target !== mimi) {
        mimi.style.display = "none";
    }
};

const opcionesMimi = mimi.querySelectorAll('.opciones');
const textarea = document.querySelector('#code');

opcionesMimi.forEach(opcion => {
    opcion.addEventListener('click', () => {
        const value = opcion.getAttribute('value');
        textarea.value = value;
        mimi.style.display = 'none';
        mover();
    });
});

cambiarCursor();