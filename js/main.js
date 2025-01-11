console.log("¡Hola Mundo!");

var user; //  Si declaramos una variable sin asignarle un valor, su valor será “undefined”
user = "Laura"; // Si asignamos un valor a una variable, su valor será el que le hayamos asignado

console.log(user);

// ---------------------------------------------------

function getWelcomeMessage (message) {
if(message) {
console.log(message + " " + user);
} else {
console.log("Hola " + user);
}
}

getWelcomeMessage();

// ---------------------------------------------------

function getWelcomeMessage2 (message) {
if(message) {
console.log(message + " - " + user);
} else {
var message = "Hola --"; // Si declaramos una variable dentro de una función con “var”, su ámbito será local. Una particularidad de la declaración con “var” es que, si la declaración se produce dentro de una estructura de control, el ámbito no será esta, sino la función más próxima.
console.log(message + user);
}
console.log(message);
}

getWelcomeMessage2();

// console.log(message); // Esta línea de código nos devolverá un error, ya que la variable “message” no está definida en el ámbito global


// ---------------------------------------------------

function getWelcomeMessage3 (message) {
if(message) {
console.log(message + " __ " + user);
} else {
var message = "Hola ++";
console.log(message + user);
}
console.log(message);
admin = "Adzo"; // Por otra parte, si añadimos una variable que no esté declarada con “var”, sino implícitamente a través de la asignación de un valor, comprobaremos que automáticamente será una variable global
}

getWelcomeMessage3();

// console.log(message); // Esta línea de código nos devolverá un error, ya que la variable “message” no está definida en el ámbito global

console.log(admin);

// ---------------------------------------------------

let user2; // ERROR: user ya ha sido usada en la línea 1
const defaultMessage = "Hola ";
user2 = "Raul"; // ERROR: user ya ha sido usada en la línea 1

console.log(user2);

function getWelcomeMessage4(message) {
if (message) {
console.log(message + " " + user2);
} else {
let auxVariable = "Ejemplo";
console.log(defaultMessage + user2);
}
// console.log(auxVariable); // ERROR: auxVariable no está definida en este ámbito. Con "var" sí estaría definida
}

getWelcomeMessage4();

// ---------------------------------------------------

var user = "Carlos";
var message = "Hola " + user + " bienvenido a nuestra aplicación";
console.log(message);

// ---------------------------------------------------

let user3 = "Edson";
let message3 = `Hola ${user3} bienvenido a nuestra aplicación`;
console.log(message3);

// ---------------------------------------------------

let company = "ACME S.A.";
let footerMessage = `© ${new Date().getFullYear()} ${company} Todos los derechos reservados`; // Podemos incluir expresiones de JavaScript dentro de las plantillas literales
console.log(footerMessage);

// ---------------------------------------------------

let author = "Miguel de Cervantes";
let title = "El Quijote";
let bookTitles = `
Autor: ${author}
Título: ${title}
`
console.log(bookTitles);

// ---------------------------------------------------

function multiply (a, b) {
    return a * b;
   }
   console.log(multiply(2)); // Devuelve NaN

// ----------------------------------------------------------------

function multiply2 (a = 0, b = 0) {
    return a * b;
   }
   console.log(multiply2(2));

// ----------------------------------------------------------------

const user1 = {
    name: "Juan",
    surname: "Pérez López",
    address: {
    street: "Príncipe de Vergara, 10",
    city: "Madrid"
    }
   }
   const user4 = {
    name: "Laura",
    surname: "Nadal Novo",
   }
   let city1 = user1.address.city;
   console.log(city1);
//    let city2 = user4.address.city; // ERROR: user4.address es undefined
//    console.log(city2);

   let city2;
    if (user4.address) {
    city2 = user4.address.city;
    }
    console.log(city2);

// ----------------------------------------------------------------

let city01 = user1.address?.city; // Si la propiedad address no existe, devolverá undefined
console.log(city01);
let city02 = user4.address?.city;
console.log(city02);

// ----------------------------------------------------------------

let city03 = user4.address?.city ?? "Dirección no disponible"; // Si la propiedad address no existe, devolverá el valor de la derecha
console.log(city03);

// ----------------------------------------------------------------

let userNames; // Si no asignamos un valor a la variable, su valor será undefined
let txtBtn = userNames ?? "Inicie sesión"; // Si userNames es null o undefined, devolverá el valor de la derecha
console.log(txtBtn); // Inicie sesión

let userNames2 = ["Juan", "Laura", "Carlos"];
let txtBtn2 = userNames2 ?? "Inicie sesión";
console.log(txtBtn2); // Inicie sesión