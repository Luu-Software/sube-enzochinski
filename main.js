const registrada = document.getElementById("registrada");
const jurisdiccion = document.getElementById("jurisdiccion");
const distancia = document.getElementById("distancia");
const boton = document.getElementById("boton");
const tarifa = document.getElementById("tarifa");

boton.addEventListener("click", () => {
    let tipoTarjeta = registrada.value; 
    let km = parseFloat(distancia.value);
    let zona = jurisdiccion.value;
    let precioFinal = 0;

    if (isNaN(km) || km <= 0) {
        tarifa.innerText = "Por favor, ingresá una distancia válida.";
        return;
    }

    if (km <= 3) {
        precioFinal = 715.24;
    } else if (km <= 6) {
        precioFinal = 794.74;
    } else if (km <= 12) {
        precioFinal = 855.97;
    } else {
        precioFinal = 917.24;
    }

    if (tipoTarjeta === "no") {
        if (km <= 3) precioFinal = 1137.23;
        else if (km <= 6) precioFinal = 1263.64;
        else if (km <= 12) precioFinal = 1360.99;
        else precioFinal = 1458.41;
    } else if (tipoTarjeta === "social") {
        precioFinal = precioFinal * 0.45;
    }

    if (zona === "pba") {
        precioFinal = precioFinal * 1; 
    }

    tarifa.innerText = "El valor del boleto es: $" + precioFinal.toFixed(2);
});
