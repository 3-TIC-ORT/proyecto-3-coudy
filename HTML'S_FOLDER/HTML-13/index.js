// Nivel 4: HTML - Completar la etiqueta HTML correcta

document.addEventListener("DOMContentLoaded", () => {
    // Elementos de input donde el usuario tiene que escribir
    const inp1 = document.querySelector("#inp1");
    const inp2 = document.querySelector("#inp2");
    const inp3 = document.querySelector("#inp3");
    const inp4 = document.querySelector("#inp4");
  
    // Agregar eventos a los inputs para verificar la respuesta
    inp1.addEventListener("input", checkAnswer);
    inp2.addEventListener("input", checkAnswer);
    inp3.addEventListener("input", checkAnswer);
    inp4.addEventListener("input", checkAnswer);
  
    // Función que valida las respuestas
    function checkAnswer() {
      const correctAnswer = "p";
      const inputs = [inp1, inp2, inp3, inp4];
  
      // Verifica si todos los inputs son correctos
      const isCorrect = inputs.every((input, index) => {
        if (index === 0 || index === 3) {
          return input.value.toLowerCase() === correctAnswer;
        } else if (index === 1 || index === 2) {
          return input.value.toLowerCase() === "";
        }
      });
  
      // Muestra un mensaje si la respuesta es correcta
      if (isCorrect) {
        alert("¡Respuesta correcta!");
      }
    }
  });
  