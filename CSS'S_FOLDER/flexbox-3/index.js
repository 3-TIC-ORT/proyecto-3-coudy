let codigo = document.getElementById('code');
let objMover = document.querySelector('.trabajo');

function mover() {
    objMover.classList.remove('JUScentrar', 'JUSend', 'JUSbetween', 'JUSaround', 'JUSevenly', 'ALIGcentrar');
    const valorCodigo = codigo.value.trim().split(';');

    valorCodigo.forEach((propiedad) => {
        propiedad = propiedad.trim();

        if (propiedad === "justify-content: center") {
            objMover.classList.add('JUScentrar');
            localStorage.setItem('levelPassed3-flexbox', 1)
        } else if (propiedad === "justify-content: flex-end"){
            objMover.classList.add('JUSend');
        } else if (propiedad === "justify-content: space-between"){
            objMover.classList.add('JUSbetween');
        } else if (propiedad === "justify-content: space-around"){
            objMover.classList.add('JUSaround');
        } else if (propiedad === "justify-content: space-evenly"){
            objMover.classList.add('JUSevenly');
        }
        if (propiedad === "align-items: center") {
            objMover.classList.add('ALIGcentrar');
        } else if (propiedad === "align-items: flex-end") {
            objMover.classList.add('ALIGcentrar');
        }                
    });
}

codigo.addEventListener('input', mover);

document.querySelector('.siguiente').addEventListener('click', ()=>{
    let verify = Number(localStorage.getItem('levelPassed3-flexbox') || 0)
    if(verify === 1){
        window.location.href='../flexbox-4/index.html'
    } else{
        alert('No has completado el ejercicio');
    }
})

