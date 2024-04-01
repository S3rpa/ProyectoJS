var obj;
var objetoXHR;

document.addEventListener('DOMContentLoaded', function() {
    // Asegúrate de que mostrarResultados y cualquier otra función necesaria estén correctamente definidas.
    mostrarResultados(resultadosData);
});

if (window.XMLHttpRequest) {
    objetoXHR = new XMLHttpRequest();
} else {
    if (window.activexObject) {
        objetoXHR = new ActiveXObject("Microsoft.XMLHTTP");
    }
}



//
//function cargarResultados() {
//fetch('resultados.js') // Asegurarse de que la ruta al archivo JSON sea correcta.
// .then(response => response.json())
// .then(data => mostrarResultados(data))
// .catch(error => console.error("Error al cargar los resultados: ", error));
//}
//
function mostrarResultados(data) {
    const selectJornadas = document.getElementById("jornadas");
    selectJornadas.innerHTML = "";

    // Rellenar el select de jornadas
    data.calendario.forEach((jornada, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = jornada.jornadas;
        selectJornadas.appendChild(option);
    });

    // Mostrar inicialmente la primera jornada
    if (data.calendario.length > 0) {
        mostrarDetalleJornada(data.calendario[0]);
    }
    // Cambio en el select de jornadas
    selectJornadas.onchange = function() {
        mostrarDetalleJornada(data.calendario[this.value]);
    };
}

function mostrarDetalleJornada(jornada) {
    // Mostrar los resultados de la jornada seleccionada
    const resultadosElement = document.getElementById("resultado");
    const clasificacionElement = document.getElementById("clasificacion");
    const goleadoresElement = document.getElementById("goleadores");

    resultadosElement.innerHTML = jornada.resultado.map(partido => `<tr><td>${partido}</td></tr>`).join('');
    clasificacionElement.innerHTML = jornada.posicion.map(pos => `<tr><td>${pos}</td></tr>`).join('');
    goleadoresElement.innerHTML = jornada.goleadores.map(gol => `<div>${gol}</div>`).join('');
}

function Jornadas() {
    obj = Datos();
    obj = JSON.parse(obj);

    var jornadasliga = document.getElementById("jornadas");

    for (var i in obj.calendario) {
        var jliga = obj.calendario[i].jornadas;
        var opcion = document.createElement("option");
        var txt = document.createTextNode(jliga);
        opcion.appendChild(txt);
        jornadasliga.appendChild(opcion);
    }
    Resultado();
    Clasificacion();
    Pichichi();
}

function Buscar() {
    var buscar = document.getElementById("jornadas").value;

    for (var i in obj.calendario) {
        if (buscar == obj.calendario[i].jornadas) {
            return i;
        }
    }
}

function Resultado() {
    var res = document.getElementById("resultado");
    var jornadas = Buscar();
    res.innerHTML = "";
    var encontrado = obj.calendario[jornadas];

    for (var i in encontrado.resultado) {
        var resultados = document.createElement("tr");
        var espacio = document.createElement("hr");
        var txt = document.createTextNode(encontrado.resultado[i]);
        resultados.appendChild(txt);
        res.appendChild(resultados);
        resultados.appendChild(espacio);
    }
}

function Clasificacion() {
    var res = document.getElementById("clasificacion");
    var clasi = Buscar();
    res.innerHTML = "";
    var encontrado = obj.calendario[clasi];

    for (var i in encontrado.posicion) {
        var clasificacion = document.createElement("tr");
        var espacio = document.createElement("p");
        var txt = document.createTextNode(encontrado.posicion[i]);
        clasificacion.appendChild(txt);
        res.appendChild(clasificacion);
        clasificacion.appendChild(espacio);

    }
}

function Pichichi() {
    var res = document.getElementById("goleadores");
    var goles = Buscar();
    res.innerHTML = "";
    var encontrado = obj.calendario[goles];

    for (var i in encontrado.resultado) {
        var goleadores = document.createElement("tr");
        var espacio = document.createElement("hr");
        var txt = document.createTextNode(encontrado.goleadores[i]);
        goleadores.appendChild(txt);
        res.appendChild(goleadores);
        goleadores.appendChild(espacio);
    }
}