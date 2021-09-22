// funciones puras
// dada una misma entrada, siempre regresa el mismo valor de salida
const double = (x) => x * 2;

//funciones impuras
// son aquellas que no siempre retornan lo mismo o que pueden leer
// y/o escribir de un estado que puede cambiar
const time = new Date().toDateString();

// copiar objetos
let a = 1;
let b = a;
console.log(a, b); // 1 1
b += 1;
console.log(a, b); // 1 2

let car = {
  color: "red",
  year: 2019,
  km: 0,
};

let newCar = car;

newCar.color = 2000; //se cambia el valor de los dos objetos
console.log(car, newCar); 

let newCar2 = Object.assign({}, car)
newCar.color = 2000; //se cambia el valor solo de uno
console.log(car, newCar2); 

// nota: https://bambielli.com/til/2017-01-29-spread-operator-deep-copy/