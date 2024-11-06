const dragItems = document.querySelectorAll('.drag-item');
const dropArea = document.querySelector('.dropArea');

// Agrega el evento de arrastrar para cada elemento
dragItems.forEach(item => {
    item.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
    });
});

// Permite que el área de soltar acepte el elemento arrastrado
dropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
});

// Detecta cuando se suelta un elemento en el área de soltar
dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text');
    
    // Verifica la respuesta correcta o incorrecta según el elemento arrastrado
    if (draggedElementId === 'opcion1') {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    } else if (draggedElementId === 'opcion2') {
        alert('Respuesta correcta, toca siguiente para continuar');
        modificarNivelHtmlAlcanzado(2); // Guarda el nivel alcanzado como 2
    } else if (draggedElementId === 'opcion3') {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    }
});

// Controla el botón "siguiente" para avanzar al próximo nivel
document.querySelector('.siguiente').addEventListener('click', () => {
    if (obtenerNivelHtmlAlcanzado() >= 2) {
        window.location.href = '../HTML-10/index.html';
    } else {
        alert("Aún no has completado el nivel");
    }
});
