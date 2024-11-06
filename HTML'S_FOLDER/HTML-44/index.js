const textarea = document.getElementById('codigoHTML');
const lineNumbers = document.getElementById('lineNumbers');
const resultado = document.getElementById('resultado');
const cambiar = document.getElementById('cambiar');
const cambiar2 = document.getElementById('cambiar2');

function actualizarNumerosDeLinea() {
    const totalLineas = textarea.value.split('\n').length;
    lineNumbers.innerHTML = '';

    for (let i = 6; i < totalLineas + 6; i++) {
        lineNumbers.innerHTML += i + '.<br>'; 
    }

    cambiar.textContent = `${totalLineas + 6}.`; 
    cambiar2.textContent = `${totalLineas + 7}.`; 

}

function ajustarAltura() {
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
}

textarea.addEventListener('scroll', () => {
    lineNumbers.scrollTop = textarea.scrollTop;
});

textarea.addEventListener('input', () => {
    actualizarNumerosDeLinea();
    ajustarAltura();
});

actualizarNumerosDeLinea();
ajustarAltura();

function verificarCodigo() {
    const codigoHTML = textarea.value;

    const contenedor = document.createElement('div');
    contenedor.innerHTML = codigoHTML;

    const encabezado = contenedor.querySelector('h1') || contenedor.querySelector('h2');
    const parrafo = contenedor.querySelector('p');
    const imagen = contenedor.querySelector('img');
    const link = contenedor.querySelector('a');
    const lista = contenedor.querySelector('ul') || contenedor.querySelector('ol');

    const tieneEncabezado = encabezado && encabezado.textContent.trim().length > 0;
    const tieneParrafo = parrafo && parrafo.textContent.trim().length > 0;
    const tieneImagen = imagen && imagen.getAttribute('src') && imagen.getAttribute('src').trim().length > 0;
    const tieneAlt = imagen && imagen.getAttribute('alt') && imagen.getAttribute('alt').trim().length > 0;
    const tieneLink = link && link.getAttribute('href') && link.getAttribute('href').trim().length > 0;
    const tieneLista = lista && lista.querySelectorAll('li').length > 0 && Array.from(lista.querySelectorAll('li')).some(li => li.textContent.trim().length > 0);

    let mensaje = "<h2>Resultado de la Verificación:</h2><ul>";
    mensaje += tieneEncabezado ? "<li>Encabezado (con contenido): ✓</li>" : "<li>Encabezado (con contenido): ✗</li>";
    mensaje += tieneParrafo ? "<li>Párrafo (con contenido): ✓</li>" : "<li>Párrafo (con contenido): ✗</li>";
    mensaje += tieneImagen ? "<li>Imagen (con src válido): ✓</li>" : "<li>Imagen (con src válido): ✗</li>";
    mensaje += tieneAlt ? "<li>Imagen (con alt descriptivo): ✓</li>" : "<li>Imagen (con alt descriptivo): ✗</li>";
    mensaje += tieneLink ? "<li>Link (con href válido): ✓</li>" : "<li>Link (con href válido): ✗</li>";
    mensaje += tieneLista ? "<li>Lista (con al menos un elemento con contenido): ✓</li>" : "<li>Lista (con al menos un elemento con contenido): ✗</li>";
    mensaje += "</ul>";

        let contadorCorrectos = 0;
        if (tieneEncabezado) contadorCorrectos++;
        if (tieneParrafo) contadorCorrectos++;
        if (tieneImagen) contadorCorrectos++;
        if (tieneAlt) contadorCorrectos++;
        if (tieneLink) contadorCorrectos++;
        if (tieneLista) contadorCorrectos++;

        const cantidadDeseada = 6;
    const esSatisfactorio = contadorCorrectos >= cantidadDeseada;    
    if(esSatisfactorio){
        localStorage.setItem('finalLevelHTML-Passed', 1)
    } else{
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];
        resultado.innerHTML = mensaje;
        modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    }
}

document.querySelector('.siguiente').addEventListener('click', ()=>{
    verificarCodigo();
    let verify = Number(localStorage.getItem('finalLevelHTML-Passed') || 0)
    let volver = Number(localStorage.getItem('seleccion-Guia'))
    if(verify = 1){
        if(volver === 1){
            window.location.href='../../Seleccion_de_niveles-Guia'
        } else if(volver === 2){
            window.location.href='../../Seleccion_de_niveles-Manual'
        }
    } else{
        alert('No has completado el nivel')
    }
})