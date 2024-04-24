let destinos = ["Colonia", "Minas", "Rocha"];

let nombre = [];
let factura = [];
let destino = [];

const repeticiones = 4; //Limito la cantidad de participantes para esta entrega

function ingresoDatos() {
    for (let i = 0; i < repeticiones; i++) {
        
        // Consulto Nombre del Participante
        nombre[i] = prompt("Por favor, ingresa tu nombre:");
        
        // Consulta Nro de Factura (solo números)
        factura[i] = Number(prompt("Ingrese el número de factura de su compra (menor a 1000)"));
        if (factura[i] > 1000) {
            alert("Numero de factura inválida. Andá a comprar algo y volvé");
        }
        // Seleccionar entre 3 Destinos
        destino[i] = prompt("¿A dónde te gustaría viajar? Elige entre: Colonia, Minas, Rocha");
        while (!destinos.includes(destino[i])) {
            destino[i] = prompt("Destino inválido. Por favor, elige entre: Colonia, Minas, Rocha");
        }
    }
}

function mostrarDatos() {
    console.log("Se anotaron " + nombre.length + " personas en el sorteo");
    for (i = 0; i < repeticiones; i++) {
        console.log("Nombre: " + nombre[i] + ", factura: " + factura[i] + ", destino: " + destino[i]);
    }    
}

function realizarSorteo() {
// SORTEO
    
    let indice = Math.floor(Math.random() * nombre.length);
    // console.log("indice : " + indice);

    var titulo = document.getElementById("tit_resultado");
    titulo.innerHTML = "RESULTADO DEL SORTEO";
    var resultado = document.getElementById("msg_resultado");
    resultado.innerHTML = nombre[indice] + " ha ganado el sorteo y ha sido asignado al destino: " + destino[indice] + " ¡Felicitaciones!!!";
}