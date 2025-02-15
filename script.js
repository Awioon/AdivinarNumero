let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        let intentos = 0;
        
        const modo = document.getElementById("oscuro");
        const body = document.body;
        const boton = document.getElementById("boton");
        const adivinar = document.getElementById("adiv");
        const pista = document.getElementById("pista");
        const reiniciar = document.getElementById("reiniciar");
        const versionJuego = "2.1";
        let oscuro = true;

        // Cambiar entre modo claro y oscuro
        modo.addEventListener("click", function() {
            oscuro = !oscuro;
            body.classList.toggle("modo-claro");
            modo.textContent = oscuro ? "Modo claro" : "Modo oscuro";
        });

        // Mostrar la versión del juego
        document.getElementById("version").textContent = versionJuego;
        
        // Verificación del número
        boton.addEventListener("click", function() {
            const numeroUsuario = parseInt(adivinar.value);

            if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
                pista.textContent = "Introduce un número entre 1 y 100.";
                pista.style.color = "yellow";
                return;
            }

            intentos++;
            document.getElementById("intentos").textContent = `Intentos: ${intentos}`;

            if (numeroUsuario === numeroAleatorio) {
                pista.textContent = "¡Felicidades! ¡Adivinaste el número!";
                pista.style.color = "green";
            } else if (numeroUsuario < numeroAleatorio) {
                pista.textContent = "El número es mayor. ¡Sigue intentando!";
                pista.style.color = "red";
            } else {
                pista.textContent = "El número es menor. ¡Sigue intentando!";
                pista.style.color = "red";
            }
        });

        // Reiniciar el juego
        reiniciar.addEventListener("click", function() {
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            intentos = 0;
            document.getElementById("intentos").textContent = "Intentos: 0";
            pista.textContent = "";
            adivinar.value = "";
        });