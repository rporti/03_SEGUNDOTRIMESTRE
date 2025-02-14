const express = require("express");  // Importar Express
const cors = require("cors");        // Importar CORS para evitar problemas de seguridad

const app = express(); // Crear la aplicación Express
app.use(cors()); // Habilitar CORS para permitir peticiones desde el navegador


// Array con un conjunto de preguntas y respuestas
const preguntas = [
    { pregunta: "¿En qué año llegó el hombre a la Luna?", respuesta: "1969" },
    { pregunta: "¿Cuál es el océano más grande del mundo?", respuesta: "Pacífico" },
    { pregunta: "¿Cómo se llama la capital de Japón?", respuesta: "Tokio" },
    { pregunta: "¿Cuál es el planeta más grande del sistema solar?", respuesta: "Júpiter" },
    { pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Leonardo da Vinci" }
];

// Aquí estamos configurando la ruta del servidor para responder a solicitudes en "/pregunta"
// `app.get("/pregunta", (req, res) => {...})` es la función que se ejecuta cuando alguien hace una solicitud GET a "/pregunta"
app.get("/pregunta", (req, res) => {
   
    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
    
    // Responde con un objeto JSON que contiene la pregunta aleatoria seleccionada
    res.json(preguntaAleatoria);
});

// Establecemos el puerto en el que el servidor va a escuchar
const PORT = 3000;

// Iniciamos el servidor en el puerto 3000 y cuando se ejecute, muestra un mensaje en la consola
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
