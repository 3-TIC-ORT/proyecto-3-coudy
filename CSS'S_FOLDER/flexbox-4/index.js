let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');
const siguienteBtn = document.querySelector('.siguiente');
const relleno = document.querySelector('.relleno');

function mover() {
    objMover.classList.remove('JUScentrar', 'JUSend', 'JUSstart', 'JUSbetween', 'JUSaround', 'JUSevenly', 'ALIGcentrar', 'ALIGend', 'ALIGstart', 'ALIGbaseline', 'ALIGstrech');
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
        if (propiedad === "align-items: center" || propiedad === "align-items: center;") {
            objMover.classList.add('ALIGcentrar');
        } else if (propiedad === "align-items: flex-end" || propiedad === "align-items: flex-end;") {
            objMover.classList.add('ALIGend');
            localStorage.setItem('levelPassed4-flexbox', 1);
            nivelCompletado = true;
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
        siguienteBtn.style.cursor='pointer'
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
    if (obtenerNivelCssAlcanzado()>=15) {
        siguienteBtn.style.cursor = 'pointer';
    }
}

siguienteBtn.addEventListener('click', () => {

    if (obtenerNivelCssAlcanzado()>=15) {
        window.location.href = '../flexbox-5/index.html';
    } else {
        const valorCodigo = codigo.value.trim();
        if (valorCodigo == "align-items: flex-end;")
        {
            modificarNivelCssAlcanzado(15);
            window.location.href='../flexbox-5/index.html'
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

cambiarCursor();