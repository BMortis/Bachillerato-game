document.addEventListener('DOMContentLoaded', () => {
    const stopButtons = document.querySelectorAll('.btn-stop');
    stopButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Lógica para manejar el clic en el botón STOP
            console.log(`Jugador ${e.target.dataset.player} ha presionado STOP`);
        });
    });
});

function handleStopButtonClick() {
    // Deshabilitar todos los campos de entrada en la página
    const allInputs = document.querySelectorAll('input[type="text"]');
    allInputs.forEach(input => {
        input.disabled = true;
    });

    //calcular puntajes, etc.
    for (let i = 1; i <= 7; i++) { // Asumiendo 7 jugadores
        let puntajeJugador = calcularPuntaje(i);
        console.log(`Puntaje del Jugador ${i}: ${puntajeJugador}`);
        // Aquí puedes actualizar el puntaje en la interfaz del juego
    }
    
}

function calcularPuntaje(jugador) {
    let puntaje = 0;
    // Suponiendo que cada respuesta correcta vale 10 puntos, por ejemplo

    // Seleccionar todos los inputs del jugador
    const inputsJugador = document.querySelectorAll(`.input-jugador-${jugador}`);

    inputsJugador.forEach(input => {
        if (input.value !== "" && esRespuestaValida(input.value)) {
            puntaje += 100;
        }
    });

    // Aquí puedes agregar otras reglas de puntuación si las hay

    return puntaje;
}

function esRespuestaValida(respuesta, letraJuego) {
    // Eliminar espacios al inicio y al final de la respuesta
    respuesta = respuesta.trim();

    // Verificar que la respuesta no esté vacía
    if (respuesta === "") {
        return false;
    }

    // Comparar la primera letra de la respuesta con la letra del juego
    // Convertir ambas a minúsculas (o mayúsculas) para la comparación
    return respuesta.toLowerCase().startsWith(letraJuego.toLowerCase());
}

