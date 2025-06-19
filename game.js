while (true) {
    alert("Te despiertas entre escombros. El cielo es rojo, y la ciudad está en ruinas. Debes encontrar suministros y un refugio seguro antes del anochecer");

    let life = 5;
    let members = 3;
    let bag = [];

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: Vacía`);

    alert("Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más.");
    alert("Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte.");

    alert("El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela.");

    while (true){
        let food = prompt(`¿Dónde buscar recursos vitales?
A: Ir al supermercado abandonado.
B: Robar mochila a un sobreviviente.`).toUpperCase();

        if (food == "A") {
            alert("Encontraste 'comida' y 'agua'")
            bag.push("comida", "agua");
            alert("Encuentro leve con saqueador (Pierdes vida)")
            life--;
            break;
        }
        else if (food == "B") {
            alert("Obtubiste 'linterna'")
            bag.push("linterna");
            alert("Pierdes un miembro por represalia")
            members--;
            break;
        }
        else {
            alert("Opción no válida")
        }
    };

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: ${bag}`);

    alert("Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento.");

    while (true) {
        let shelter = prompt(`La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.
A: Esconderse en una farmacia.
B: Ir a una estación de buses.
C: Refugiarse en una tienda de campaña abandonada.`).toUpperCase();

        if (shelter == "A") {
            alert("Encuentran botiquín y descansan.")
            bag.push("botiquin");
            life++;
            break;
        }
        else if (shelter == "B") {
            alert("Hay escombros, uno se lastima")
            life--;
            break;
        }
        else if (shelter == "C") {
            alert("Encuentran una batería portátil, pero hay signos de radioactividad cerca.")
            bag.push("bateria");
            life--;
            break;
        }
        else {
            alert("Opción no válida")
        }
    }

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: ${bag}`);

    alert("Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario.")

    while (true) {
        let help = prompt(`¿Cuál será su decisión?
A: Ayudar a una familia atrapada.
B: Ignorar y seguir avanzando.
C: Distraer a los enemigos y liberar a la familia a distancia.
D: Robar los recursos de la familia sin ser vistos.`).toUpperCase();

        if (help == "A") {
            alert("Ganan un miembro agradecido con recursos.")
            bag.push("mapa");
            members++;
            break;
        }
        else if (help == "B") {
            alert("No ganas nada, pero pierdes un miembro")
            members--;
            break;
        }
        else if (help == "C") {
            alert("Obtienen una linterna.")
            bag.push("linterna");
            life--;
            break;
        }
        else if (help == "D") {
            alert("Obtienen comida, pero pierden 2 miembros por represalia.")
            bag.push("comida");
            members -= 2;
            break;
        }
        else {
            alert("Opción no válida")
        }
    }

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: ${bag}`);

    alert("Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal?")
    
    while (true) {
        let smoke = prompt(`La decisión podría marcar la diferencia.
A: Investigar la señal.
B: Evitar la zona.`).toUpperCase();

        if (smoke == "A") {
            alert("Encuentran gasolina y una llave vieja.")
            bag.push("llave", "gasolina");
            break;
        }
        else if (smoke == "B") {
            alert("Evitan una emboscada, pero pierden oportunidad de obtener objetos.")
            break;
        }
        else {
            alert("Opción no válida")
        }
    }

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: ${bag}`);

    alert("El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal.")

    while (true) {
        let explore = prompt(`¿Mejor buscar una vista panorámica o seguir entre las sombras?
A: Subir a un edificio a observar.
B: Moverse por callejones.
C: Usar una alcantarilla conectada al metro.`).toUpperCase();

        if (explore == "A") {
            alert("Encuentran un dron con información.")
            bag.push("intel");
            break;
        }
        else if (explore == "B") {
            alert("Se enfrentan a animales salvajes.")
            life--;
            break;
        }
        else if (explore == "C") {
            alert("Llegan cerca de una entrada secreta al siguiente nivel.")
            bag.push("tarjeta-acceso");
            break;
        }
        else {
            alert("Opción no válida")
        }
    }

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: ${bag}`);

    alert("La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas.")

    while (true) {
        let trans = prompt(`El tiempo es limitado.
A: Reparar una bicicleta.
B: Ir a pie.`).toUpperCase();

        if (trans == "A") {
            alert("Avanzan rápido, encuentran mochila con recursos.")
            bag.push("medicinas", "bateria");
            break;
        }
        else if (trans == "B") {
            alert("Caminan mucho, cansancio general.")
            life--;
            break;
        }
        else {
            alert("Opción no válida")
        }
    }

    alert(`-----Estado------
Vida: ${life}
Miembros: ${members}
Mochila: ${bag}`);

    if (life == 0) {
        alert("No fue suficiente... El caos te ha reclamado. Tu historia termina aquí, entre ruinas y silencio.");

        let cont = confirm("Has caído. La ciudad continúa... pero sin ti. ¿Intentarás de nuevo?")
        if (cont) {
            continue;
        }
        else {
            break;
        }
    }
    else {
        alert("A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación.")
        if (life >= 3 && bag.length >=2 && bag.includes("mapa")) {
            alert("El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.")
            break;
        }
        else {
            alert("No estabas listo. La ciudad te atrapa, implacable. Sin los recursos necesarios, la salida sigue siendo solo un rumor.")
            let cont = confirm("¿Intentarás de nuevo?")
        if (cont) {
            continue;
        }
        else {
            break;
        }
        }
        
    }
}