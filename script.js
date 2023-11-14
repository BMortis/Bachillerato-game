document.addEventListener('DOMContentLoaded', () => {
    const stopButtons = document.querySelectorAll('.btn-stop');
    stopButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Lógica para manejar el clic en el botón STOP
            console.log(`Jugador ${e.target.dataset.player} ha presionado STOP`);
        });
    });
});

button.addEventListener('click', (e) => {
    fetch('/stop-game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ player: e.target.dataset.player }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    });
});
