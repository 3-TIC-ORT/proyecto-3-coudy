let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');

function mover() {
    objMover.classList.remove('JUScentrar', 'JUSend', 'JUSbetween', 'JUSaround', 'JUSevenly');
    const valorCodigo = codigo.value.trim().split(';');

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
}

codigo.addEventListener('input', mover);

document.querySelector('.siguiente').addEventListener('click', ()=>{    
    if(obtenerNivelCssAlcanzado()>=12){
        window.location.href='../flexbox-2/index.html'
    } else{
        const valorCodigo = codigo.value.trim();
        if (valorCodigo == "justify-content: flex-end;")
        {
            modificarNivelCssAlcanzado(12);
            window.location.href='../flexbox-2/index.html'
        }
        else
        {
            alert('No has completado el ejercicio');
        }
        
    }
})