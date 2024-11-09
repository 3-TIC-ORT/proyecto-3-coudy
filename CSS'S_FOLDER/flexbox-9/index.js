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

        objMover.classList.remove(
            'JUScentrar', 'JUSend', 'JUSstart', 'JUSbetween', 'JUSaround', 'JUSevenly',
            'ALIGcentrar', 'ALIGend', 'ALIGstart', 'ALIGbaseline', 'ALIGstrech',
            'FLEXrow', 'FLEXrow-reverse', 'FLEXcolumn', 'FLEXcolumn-reverse',
            'WRAPnowrap', 'WRAPwrap', 'WRAPwrap-reverse'
        );
        
        // flex-direction
        if (propiedad === "flex-direction: row" || propiedad === "flex-direction: row;") {
            objMover.classList.add('FLEXrow');
        } else if (propiedad === "flex-direction: row-reverse" || propiedad === "flex-direction: row-reverse;") {
            objMover.classList.add('FLEXrow-reverse');
        } else if (propiedad === "flex-direction: column" || propiedad === "flex-direction: column;") {
            objMover.classList.add('FLEXcolumn');
        } else if (propiedad === "flex-direction: column-reverse" || propiedad === "flex-direction: column-reverse;") {
            objMover.classList.add('FLEXcolumn-reverse');
        }
        
        // justify-content
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
        } else if (propiedad === "justify-content: space-evenly" || propiedad === "justify-content: space-evenly;") {
            objMover.classList.add('JUSevenly');
        }
        
        // align-items
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
        
        // flex-wrap
        if (propiedad === "flex-wrap: nowrap" || propiedad === "flex-wrap: nowrap;") {
            objMover.classList.add('WRAPnowrap');
        } else if (propiedad === "flex-wrap: wrap" || propiedad === "flex-wrap: wrap;") {
            objMover.classList.add('WRAPwrap');
            localStorage.setItem('levelPassed9-flexbox', 1)
            nivelCompletado = true;
        } else if (propiedad === "flex-wrap: wrap-reverse" || propiedad === "flex-wrap: wrap-reverse;") {
            objMover.classList.add('WRAPwrap-reverse');
        }        
    });

    if (nivelCompletado) {
        siguienteBtn.classList.add('pulse');
        siguienteBtn.style.cursor='pointer'
        siguienteBtn.addEventListener('click', ()=>{ window.location.href='../flexbox-10/index.html' })
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
let verify = Number(localStorage.getItem('levelPassed9-flexbox') || 0);
function cambiarCursor(){
    if(verify === 1){
        siguienteBtn.style.cursor = 'pointer';
    }
}

siguienteBtn.addEventListener('click', () => {
    if (verify === 1) {
        window.location.href = '../flexbox-10/index.html';
    } else {
        siguienteBtn.classList.remove('pulse-loop');
        relleno.classList.remove('shake');
        setTimeout(() => {
            relleno.classList.add('shake');
        }, 10);
    }
});

cambiarCursor();