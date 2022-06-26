var arreglo=[1,2,3,4,5]

/** 
 * El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array. 
 * El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
 * El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
 * months.splice(4, 1, 'May');
// replaces 1 element at index 4
 * 
 * 
 * */

/** promedio usando funciones de arreglo */

var arreglo=[10,20,30,40,50]
arreglo.reduce((valori,valoract)=>{return valori+valoract})/arreglo.length>50 ? console.log("A") : console.log("R")

/**Ej individual 1 */

var arreglo=[10,20,30,40,50]

function imprimearray(arreglo){
    arreglo.map(imprimearray=> console.log(imprimearray))
}


/**Crear un método que a partir de un array de calificaciones, 
 * filtre las notas aprobatorias y retorne el nuevo array.  
 * aprobadas([50, 80, 100, 69, 70, 10]) // [80, 100, 70]
 * */
var arreglo= [50, 80, 100, 69, 70, 10]
console.log(arreglo.filter(score=> score>= 70))



