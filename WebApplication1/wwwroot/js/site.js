// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var cuentaPelícula = 0;
var coloresPorTipo = {
    "T1": ["Clear", "Metalized", "Alox"],  // PET
    "T2": ["Clear", "Metalized", "WC", "WCM", "PW", "Matte"],  // BOPP
    "T3": ["Clear", "Opaque"],  // LDPE
    "T4": ["Clear"],  // CPP
    "T5": ["N/A"],  // FOIL
    "T6": ["N/A"],  // PVC
    "T7": ["N/A"],  // NYLON
    "T8": ["N/A"]   // POLYOLEFFIN
};
var gaugePorTipo = {
    "T1": [10, 12, 19, 23],  // PET
    "T2": [12, 15, 20, 25, 30, 35, 38, 40, 50],  // BOPP
    "T3": [25.2, 30.2, 37.8, 42.8, 45.3, 50.4, 63.0, 70.5, 75.6, 88.2, 90.7, 100.8, 115.9, 133.5, 138.5],  // LDPE
    "T4": [15, 15, 20, 25],  // CPP
    "T5": [7, 9],  // FOIL
    "T6": [7, 9],  // PVC
    "T7": [15],  // NYLON
    "T8": [50]   // POLYOLEFFIN
}

function agregarFila() {
    var tabla = document.getElementById("tablaPeliculas").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow(tabla.rows.length);

    var celda1 = nuevaFila.insertCell(0);
    var celda2 = nuevaFila.insertCell(1);
    var celda3 = nuevaFila.insertCell(2);
    var celda4 = nuevaFila.insertCell(3);

    celda1.innerHTML = "Film " + (++cuentaPelícula);
    celda2.innerHTML = "";
    celda3.innerHTML = "";
    celda4.innerHTML = "";

    //SELECCIONAR EL TIPO
    var selectTipo = document.createElement("select");
    selectTipo.name = "tipo-producto";
    selectTipo.id = "tipo-producto";
    var opcionesTipo = ["PET", "BOPP", "LDPE", "CPP", "FOIL", "PVC", "NYLON", "POLYOLEFFIN"];
    for (var i = 0; i < opcionesTipo.length; i++) {
        var opcionTipo = document.createElement("option");
        opcionTipo.value = "T" + (i + 1);
        opcionTipo.text = opcionesTipo[i];
        selectTipo.appendChild(opcionTipo);
    }
    celda2.appendChild(selectTipo);

    //SELECCIONAR EL COLOR
    var selectColor = document.createElement("select");
    selectColor.name = "color-producto";
    selectColor.id = "color-producto";
    var opcionesColor = coloresPorTipo[selectTipo.value];
    for (var i = 0; i < opcionesColor.length; i++) {
        var opcionColor = document.createElement("option");
        opcionColor.value = opcionesColor[i];
        opcionColor.text = opcionesColor[i];
        selectColor.appendChild(opcionColor);
    }
    celda3.appendChild(selectColor);

    //SELECCIONAR EL GAUGE
    var selectGauge = document.createElement("select");
    selectGauge.name = "gauge-producto";
    selectGauge.id = "gauge-producto";
    var opcionesGauge = gaugePorTipo[selectTipo.value];
    for (var i = 0; i < opcionesGauge.length; i++) {
        var opcionGauge = document.createElement("option");
        opcionGauge.value = opcionesGauge[i];
        opcionGauge.text = opcionesGauge[i];
        selectGauge.appendChild(opcionGauge);
    }
    celda4.appendChild(selectGauge);

    //PARA DETECTAR LOS CAMBIOS AL TIPO DE PRODUCTO Y CAMBIAR EL COLOR
    selectTipo.addEventListener('change', function () {
        //PARA COLOR
        while (selectColor.firstChild) {
            selectColor.removeChild(selectColor.firstChild);
        }
        var nuevasOpcionesColor = coloresPorTipo[selectTipo.value];
        for (var i = 0; i < nuevasOpcionesColor.length; i++) {
            var nuevaOpcionColor = document.createElement("option");
            nuevaOpcionColor.value = nuevasOpcionesColor[i];
            nuevaOpcionColor.text = nuevasOpcionesColor[i];
            selectColor.appendChild(nuevaOpcionColor);
        }
        //PARA GAUGE
        while (selectGauge.firstChild) {
            selectGauge.removeChild(selectGauge.firstChild);
        }
        var nuevasOpcionesGauge = gaugePorTipo[selectTipo.value];
        for (var i = 0; i < nuevasOpcionesGauge.length; i++) {
            var nuevaOpcionGauge = document.createElement("option");
            nuevaOpcionGauge.value = nuevasOpcionesGauge[i];
            nuevaOpcionGauge.text = nuevasOpcionesGauge[i];
            selectGauge.appendChild(nuevaOpcionGauge);
        }
    });
}

//QUITAR UNA FILA DE LA TABLA
function quitarFila() {
    var tabla = document.getElementById("tablaPeliculas").getElementsByTagName('tbody')[0];
    var numeroFilas = tabla.rows.length;

    if (numeroFilas > 2) {
        tabla.deleteRow(numeroFilas - 1);
        cuentaPelícula = cuentaPelícula - 1;
    } else {
        alert("El producto debe tener al menos un film.");
    }
}
