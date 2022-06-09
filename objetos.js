let personajes = {
    nombre: "Tony Stark",
    codeName: "Iroman",
    vivo: false,
    edad:40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion:{
        zip: '10880, 90265',
        ubiccacion: 'Malibu, EEUU'
    },
    ultimaPelicula: "Infinity War"
}

console.log(personajes.nombre)
console.log(personajes.trajes.length)

let x = "vivo";
console.log("vivo", personajes[x])

/* Borrar un elemento del objeto */
delete personajes.edad
console.log(personajes)

/* Convertir un Objeto a una array */
const entries = Object.entries(personajes)
console.log(entries)

/* Agregar un elemento a un objeto */
personajes.casado = true;

/* Evitar modificar un objeto y evitar cambios de valores*/
Object.freeze(personajes)