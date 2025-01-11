// console.log("¡Hola Mundo!");

// var user; //  Si declaramos una variable sin asignarle un valor, su valor será “undefined”
// user = "Laura"; // Si asignamos un valor a una variable, su valor será el que le hayamos asignado

// console.log(user);

// ---------------------------------------------------

// function getWelcomeMessage (message) {
// if(message) {
// console.log(message + " " + user);
// } else {
// console.log("Hola " + user);
// }
// }

// getWelcomeMessage();

// ---------------------------------------------------

// function getWelcomeMessage2 (message) {
// if(message) {
// console.log(message + " - " + user);
// } else {
// var message = "Hola "; // Si declaramos una variable dentro de una función con “var”, su ámbito será local. Una particularidad de la declaración con “var” es que, si la declaración se produce dentro de una estructura de control, el ámbito no será esta, sino la función más próxima.
// console.log(message + user);
// }
// console.log(message);
// }

// getWelcomeMessage2();

// console.log(message); // Esta línea de código nos devolverá un error, ya que la variable “message” no está definida en el ámbito global


// ---------------------------------------------------

// function getWelcomeMessage3 (message) {
// if(message) {
// console.log(message + " __ " + user);
// } else {
// var message = "Hola ";
// console.log(message + user);
// }
// console.log(message);
// admin = "Adzo"; // Por otra parte, si añadimos una variable que no esté declarada con “var”, sino implícitamente a través de la asignación de un valor, comprobaremos que automáticamente será una variable global
// }

// getWelcomeMessage3();

// // console.log(message); // Esta línea de código nos devolverá un error, ya que la variable “message” no está definida en el ámbito global

// console.log(admin);

// ---------------------------------------------------

let user; // ERROR: user ya ha sido usada en la línea 1
const defaultMessage = "Hola ";
user = "Laura"; // ERROR: user ya ha sido usada en la línea 1

console.log(user);

function getWelcomeMessage4(message) {
if (message) {
console.log(message + " " + user);
} else {
let auxVariable = "Ejemplo";
console.log(defaultMessage + user);
}
// console.log(auxVariable); // ERROR: auxVariable no está definida en este ámbito. Con "var" sí estaría definida
}

getWelcomeMessage4();