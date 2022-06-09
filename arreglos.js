

let videoJuegos = ['Mario', 'Megaman', 'Chronos', 'Trigger']

let primero = videoJuegos[2 - 2];
let ultimo = videoJuegos[videoJuegos.length-1]
console.log(primero)
console.log(ultimo)

let videoJuegoCompletos = [
    {
        nombre: "Mario",
        consola: "Nintendo",
        edad: 18
    },
    {
        nombre: "Crash",
        consola: "PlayStation",
        edad: 19
    },
    {
        nombre: "zelda",
        consola: "nintendo",
        edad: 18
    }
]

/* ForEach*/
/*--Recorrer un Arrya*/
let hola = videoJuegoCompletos.forEach((elemento, indice, arr)=>{
     console.log(elemento.nombre)
})
/*PUSH*/ 
/*Aumentar datos a un Array*/ 
let arrayPush = videoJuegoCompletos.push({nombre: "pes", consola: "PlayStattion", edad: 18})
console.log(videoJuegoCompletos)
/*UNSHIFT*/
/*Agregar un elemento al comienzo del array*/
let ArrayUnishif = videoJuegoCompletos.unshift({nombre: "Mario Car", consola: "Nintendo", edad: 40})
console.log(videoJuegoCompletos)
/*POP*/
/*--Borrar el ultimo elemento del array*/
let ArrayPop = videoJuegoCompletos.pop();
console.log(videoJuegoCompletos)
/*SPLICE*/ 
/* Eliminar un elemento en especifico*/
let pos = 1;
let arraySplice = videoJuegoCompletos.splice(pos, 1);
console.log("Splie",videoJuegoCompletos)
/**/ 
/*Saber la posicion de un elemento dentro del array*/
let Index= videoJuegoCompletos.indexOf('Crash')
console.log(Index) 