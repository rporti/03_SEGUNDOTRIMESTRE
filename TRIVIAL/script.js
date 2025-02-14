let respuestaCorrecta = ""; // Variable para guardar la respuesta correcta

// Función para obtener una pregunta del servidor
function obtenerPregunta() {
    fetch("http://localhost:3000/pregunta")  // Hacemos la petición al servidor
        .then(res => res.json())            // Convertimos la respuesta a JSON
        .then(data => {
            document.getElementById("pregunta").textContent = data.pregunta; // Mostramos la pregunta
            respuestaCorrecta = data.respuesta; // Guardamos la respuesta correcta
            document.getElementById("mensaje").textContent = ""; // Limpiamos el mensaje anterior
            document.getElementById("respuestaUsuario").value = ""; // Limpiar el input
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("pregunta").textContent = "Error al obtener la pregunta.";
        });
}

// Función para comprobar si la respuesta es correcta
function comprobarRespuesta() {
    const respuestaUsuario = document.getElementById("respuestaUsuario").value.trim(); // Obtener respuesta y quitar espacios

    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        document.getElementById("mensaje").textContent = "¡Correcto!";
        document.getElementById("mensaje").style.color = "green";
    } else {
        document.getElementById("mensaje").textContent = `Incorrecto. La respuesta era: ${respuestaCorrecta}`;
        document.getElementById("mensaje").style.color = "red";
    }
}