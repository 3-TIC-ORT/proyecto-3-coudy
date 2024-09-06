import { onEvent, startServer } from "soquetic";
import nodemailer from 'nodemailer';

// Configurar el transportador de Nodemailer
const cuenta = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USUARIO,
        pass: process.env.CONTRA
    }
});

// Función para generar el código
function generarCodigo() {
    return {
        numero1: Math.floor(Math.random() * 10),
        numero2: Math.floor(Math.random() * 10),
        numero3: Math.floor(Math.random() * 10),
        numero4: Math.floor(Math.random() * 10),
        numero5: Math.floor(Math.random() * 10)
    };
}

onEvent("obtenerCodigo", (socket) => {
    console.log("Socket:", socket);  // Agrega este console.log
    const codigo = generarCodigo();
    if (socket) {
        socket.emit("codigoGenerado", codigo); // Envía el código de vuelta al cliente
    } else {
        console.error("Socket is undefined");
    }
});

// Función para enviar el correo con el código
function enviarMail (objeto){
    console.log(objeto)
    const codigoCompleto = `${objeto.codigo.numero1} ${objeto.codigo.numero2} ${objeto.codigo.numero3} ${objeto.codigo.numero4} ${objeto.codigo.numero5}`;
    const opciones = {
        from: process.env.USUARIO,
        to: objeto.gmail,
        subject: 'Código de verificación',
        text: `Tu código de verificación es: ${codigoCompleto}`
    };

    cuenta.sendMail(opciones, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

onEvent("gmail", enviarMail);

startServer();
