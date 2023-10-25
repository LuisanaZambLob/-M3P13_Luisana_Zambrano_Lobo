
// Función para contar los enlaces en la página
function contarEnlaces() {
    const enlaces = document.getElementsByTagName('a');
    alert('Número de enlaces en la página: ' + enlaces.length);
}

// Función para obtener la dirección del penúltimo enlace
function obtenerDireccionPenultimoEnlace() {
    const enlaces = document.getElementsByTagName('a');
    if (enlaces.length >= 2) {
        const penultimoEnlace = enlaces[enlaces.length - 2];
        alert('Dirección del penúltimo enlace: ' + penultimoEnlace.href);
    } else {
        alert('No hay suficientes enlaces para obtener el penúltimo enlace.');
    }
}

// Función para contar los enlaces que dirigen a Twitter
function contarEnlacesATwitter() {
    const enlaces = document.getElementsByTagName('a');
    let contador = 0;
    for (const enlace of enlaces) {
        if (enlace.href.includes('twitter.com')) {
            contador++;
        }
    }
    alert('Número de enlaces que dirigen a Twitter: ' + contador);
}

// Función para contar los enlaces en el tercer párrafo
function contarEnlacesEnTercerParrafo() {
    const tercerParrafo = document.getElementsByTagName('p')[2];
    if (tercerParrafo) {
        const enlaces = tercerParrafo.getElementsByTagName('a');
        alert('Número de enlaces en el tercer párrafo: ' + enlaces.length);
    } else {
        alert('El tercer párrafo no existe.');
    }
}


