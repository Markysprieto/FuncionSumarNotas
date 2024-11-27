
const notas = [6, 8, 9, 2, 5, 10];

// Función para calcular la suma 
function calcularSuma(lista) {
    let total = lista[0] + lista[1] + lista[2] + lista[3] + lista[4] + lista[5];
    return total;
}

// Mostrar la suma total 
console.log("La suma de las notas es:", calcularSuma(notas));

// Función para calcular el promedio de las notas
function calcularPromedio(lista) {
    let totalSuma = calcularSuma(lista);
    return totalSuma / lista.length;
}

// Mostrar el promedio final en consola
console.log("El promedio de las notas es:", calcularPromedio(notas));
