document.addEventListener("DOMContentLoaded", () => {
    const opciones = document.querySelectorAll(".drag-item");
    const dropArea = document.querySelector(".dropArea");
    const botonSiguiente = document.querySelector(".siguiente");
  
    // Función que se llama cuando se comienza a arrastrar el ítem
    opciones.forEach(opcion => {
      opcion.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
      });
    });
  
    // Evento cuando el ítem se suelta dentro del área
    dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  
    dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData("text");
      const draggedElement = document.getElementById(data);
  
      // Verificamos si el ítem arrastrado es el correcto
      if (draggedElement) {
        dropArea.appendChild(draggedElement);
        checkAnswer();
      }
    });
  
    // Función para verificar si la respuesta es correcta
    function checkAnswer() {
      const dropElements = dropArea.children;
      const correctOrder = ['opcion1', 'opcion2', 'opcion3'];
  
      let isCorrect = true;
  
      // Verificar si los elementos están en el orden correcto
      for (let i = 0; i < dropElements.length; i++) {
        if (dropElements[i].id !== correctOrder[i]) {
          isCorrect = false;
          break;
        }
      }
  
      if (isCorrect) {
        alert("¡Respuesta correcta!");
        // Habilitar el botón de 'Siguiente' si la respuesta es correcta
        botonSiguiente.disabled = false;  // Habilitamos el botón de 'Siguiente'
      }
    }
  
    // Evento del botón Siguiente para redirigir a la siguiente página
    botonSiguiente.addEventListener("click", () => {
      window.location.href = "../HTML-4/index.html"; // Reemplaza con el link de la siguiente página
    });
  
    // Deshabilitar el botón al principio
    botonSiguiente.disabled = true;
  });
  