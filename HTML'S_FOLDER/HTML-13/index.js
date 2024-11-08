document.addEventListener("DOMContentLoaded", () => {
  const inp1 = document.getElementById("inp1");
  const inp2 = document.getElementById("inp2");
  const inp3 = document.getElementById("inp3");
  const inp4 = document.getElementById("inp4");
  const siguienteBtn = document.querySelector(".siguiente");

  function validarRespuestas() {
      const inp1Value = inp1.value.trim();
      const inp2Value = inp2.value.trim();
      const inp3Value = inp3.value.trim();
      const inp4Value = inp4.value.trim();

      if (inp1Value === "<" && inp2Value === ">" && inp3Value === "<" && inp4Value === ">") {
          return true;
      }
      return false;
  }

  siguienteBtn.addEventListener("click", () => {
      if (validarRespuestas()) {
          window.location.href = "HTML-14/index.html";
      } else {
          alert("Las respuestas son incorrectas. Intenta de nuevo.");
      }
  });
});
