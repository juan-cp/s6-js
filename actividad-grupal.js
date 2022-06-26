/**
 * Crear un método que reciba un array de nacionalidades y 
 * cuente las diferentes nacionalidades que existen. (México/Argentina/Venezuela/Perú)
 * contar(["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", 
 * "argentino", "peruano", "venezolano"]); // Mexicanos: 2
 * // Venezolanos: 2// Argentinos: 3// Peruanos: 2
 */
 a1=["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"]

 function contar(arreglo){
    console.log(arreglo.reduce((nac, item) => (nac[item] = (nac[item] || 0) + 1, nac), [])); 
}

contar(a1)