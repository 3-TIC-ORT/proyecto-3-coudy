const dragItems = document.querySelectorAll('.drag-item');
const dropArea = document.querySelector('.dropArea');

dragItems.forEach(item => {
    item.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
    });
});

dropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text');
    
    if (draggedElementId === 'opcion1') {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    } else if (draggedElementId === 'opcion2') {
        alert('Respuesta correcta, toca siguiente para continuar');
        modificarNivelHtmlAlcanzado(2);
    } else if (draggedElementId === 'opcion3') {
        alert('Respuesta incorrecta, vuelve a intentarlo');
    }
});

document.querySelector('.siguiente').addEventListener('click', () => {
    if(obtenerNivelHtmlAlcanzado >= 2) {
        window.location.href='../HTML-10/index.html'
    } else{
        alert("Aún no has completado el nivel")
    }
})