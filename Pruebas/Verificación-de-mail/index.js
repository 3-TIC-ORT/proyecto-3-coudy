const socket = io();  // Asumiendo que el servidor está en la misma URL

// Manejar la conexión con el servidor
socket.on("connect", () => {
    console.log("Conectado al servidor");
});

// Recibir el código generado desde el servidor
socket.on("codigoGenerado", (codigo) => {
    console.log("Código recibido:", codigo);
    let objeto = { codigo };
    sessionStorage.setItem('objeto', JSON.stringify(objeto));
});

// Emitir el evento "obtenerCodigo" para solicitar el código generado
socket.emit("obtenerCodigo");

// Solo permitir números en el campo de entrada
function permitirSoloNumeros(event) {
    const key = event.key;
    // Permitir solo números (0-9), backspace, y flechas izquierda/derecha
    if (!/[0-9]/.test(key) && event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39) {
        event.preventDefault();
    }
}

// Mover al siguiente input automáticamente si el input actual tiene un valor
function moverSiguiente(inputActual, siguienteID) {
    if (inputActual.value.length === 1 && siguienteID) {
        document.getElementById(siguienteID).focus();
    }
}

// Verificar el código ingresado con el código recibido desde el servidor
function verificarCodigo() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;

    let objeto = JSON.parse(sessionStorage.getItem('objeto'));
    let { codigo } = objeto;

    if (codigo && input1 == codigo.numero1 && input2 == codigo.numero2 && input3 == codigo.numero3 && input4 == codigo.numero4 && input5 == codigo.numero5) {
        window.location.href = '../../Wireframe-23/index.html'; // Redirigir al lugar deseado
    } else {
        alert("El código es incorrecto, por favor revise.");
    }
}
