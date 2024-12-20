let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');
const siguienteBtn = document.querySelector('.siguiente');
const relleno = document.querySelector('.relleno');

function mover() {
    objMover.classList.remove(
        'JUScentrar', 'JUSend', 'JUSstart', 'JUSbetween', 'JUSaround', 'JUSevenly',
        'ALIGcentrar', 'ALIGend', 'ALIGstart', 'ALIGbaseline', 'ALIGstrech',
        'FLEXrow', 'FLEXrow-reverse', 'FLEXcolumn', 'FLEXcolumn-reverse'
    );
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
        } else if (propiedad === "align-items: flex-start" || propiedad === "align-items: flex-start;") {
            objMover.classList.add('ALIGstart');
        } else if (propiedad === "align-items: baseline" || propiedad === "align-items: baseline;") {
            objMover.classList.add('ALIGbaseline');
        } else if (propiedad === "align-items: stretch" || propiedad === "align-items: stretch;") {
            objMover.classList.add('ALIGstrech');
        }
        if (propiedad === "flex-direction: row" || propiedad === "flex-direction: row;") {
            objMover.classList.add('FLEXrow');
        } else if (propiedad === "flex-direction: row-reverse" || propiedad === "flex-direction: row-reverse;") {
            objMover.classList.add('FLEXrow-reverse');
        } else if (propiedad === "flex-direction: column" || propiedad === "flex-direction: column;") {
            objMover.classList.add('FLEXcolumn');
            modificarNivelCssAlcanzado(18);
            nivelCompletado = true
        } else if (propiedad === "flex-direction: column-reverse" || propiedad === "flex-direction: column-reverse;") {
            objMover.classList.add('FLEXcolumn-reverse');
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
    if (obtenerNivelCssAlcanzado()>=18) {
        siguienteBtn.style.cursor = 'pointer';
    }
}

siguienteBtn.addEventListener('click', async () => {
    if (await obtenerNivelCssAlcanzado()>=18) {
        window.location.href = '../flexbox-8/index.html';
    } else {
        const valorCodigo = codigo.value.trim();
        if (valorCodigo == "flex-direction: column;")
            {
                await modificarNivelCssAlcanzado(18);
                window.location.href='../flexbox-8/index.html'
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