// Función para manejar clics
function verQueBotonEligio(event) {
    const buttonId = event.target.id; // Obtener el ID del botón clickeado

    // Verificar qué botón fue clickeado
    if (buttonId === 'boton-dependeQueEligio') {
        const urlParams = new URLSearchParams(window.location.search);
        const from = urlParams.get('from');

        if (from === '2') {
            window.location.href = '../Wireframe-6/index.html';
        } else if (from === '3' || from === '4') {
            window.location.href = '../Wireframe-5/index.html';
        }
    }
}

// Asignar la función de manejo al botón "Siguiente"
document.querySelector('boton-dependeQueEligio').addEventListener('click', verQueBotonEligio);
