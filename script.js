document.addEventListener('DOMContentLoaded', (event) => {
    const boton = document.getElementById('boton');
    const reiniciar = document.getElementById('reiniciar');
    const oscuro = document.getElementById('oscuro');
    const adiv = document.getElementById('adiv');
    const pista = document.getElementById('pista');
    const intentos = document.getElementById('intentos');
    const version = document.getElementById('version');

    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let contadorIntentos = 0;

    version.textContent = '1.0';

    boton.addEventListener('click', () => {
        const valor = parseInt(adiv.value);
        contadorIntentos++;
        intentos.textContent = `Intentos: ${contadorIntentos}`;

        if (valor === numeroSecreto) {
            pista.textContent = '¡Felicidades! Adivinaste el número.';
        } else if (valor < numeroSecreto) {
            pista.textContent = 'El número es mayor.';
        } else {
            pista.textContent = 'El número es menor.';
        }
    });

    reiniciar.addEventListener('click', () => {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        contadorIntentos = 0;
        intentos.textContent = 'Intentos: 0';
        pista.textContent = '';
        adiv.value = '';
    });

    oscuro.addEventListener('click', () => {
        document.body.classList.toggle('oscuro');
        oscuro.textContent = document.body.classList.contains('oscuro') ? 'Modo claro' : 'Modo oscuro';
    });
});
