document.addEventListener('DOMContentLoaded', () => {
    const stopButtons = document.querySelectorAll('.btn-stop');
    const btnComenzar = document.getElementById('btnComenzar');
    
    btnComenzar.addEventListener('click', iniciarJuego);
    stopButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Lógica para manejar el clic en el botón STOP
            console.log(`Jugador ${e.target.dataset.player} ha presionado STOP`);
        });
    });
});

let letrasUsadas = [];
function iniciarJuego() {
    // Habilitar todos los inputs y borrar su contenido
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.disabled = false;
        input.value = '';
    });

    // Cambiar la letra del juego
    cambiarLetraJuego();
}

function cambiarLetraJuego() {
    const letraJuego = document.getElementById('letraJuego');
    const nuevaLetra = generarNuevaLetra(); // Implementa esta función según tu lógica de juego
    letraJuego.textContent = nuevaLetra;
}

function generarNuevaLetra() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letraAleatoria;
    let intentos = 0; // Para evitar un bucle infinito

    do {
        const indiceAleatorio = Math.floor(Math.random() * letras.length);
        letraAleatoria = letras[indiceAleatorio];

        intentos++;
        if (intentos > letras.length) {
            console.error("Se han utilizado todas las letras.");
            return ''; // O manejar de alguna otra manera
        }
    } while (letrasUsadas.includes(letraAleatoria));

    // Agregar la letra generada a la lista de letras usadas
    letrasUsadas.push(letraAleatoria);

    return letraAleatoria;
}


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

