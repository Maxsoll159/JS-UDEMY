const saludar = () =>{
    return 1
}

console.log(saludar())
/*FUNCIONES*/ 
const random = () => Math.random();

console.log(random())

/*PROTIPS */
/*Capturar todos los argumentos que mandamos en la funciones*/
const imprimeArgumentos = (...args) =>{
    return args
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos(10,true, false, "Fernando", "Hola")
console.log(casado)
console.log(vivo)
console.log(nombre)
