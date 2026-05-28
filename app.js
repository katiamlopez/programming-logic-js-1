let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

let numeros = [num1, num2, num3];

if (num1 === num2 && num2 === num3) {
  console.log("Los tres números son iguales:", num1);
} else {

  let ascendente = [...numeros].sort((a, b) => a - b);

  let descendente = [...numeros].sort((a, b) => b - a);

  console.log("De mayor a menor:", descendente.join(", "));
  console.log("De menor a mayor:", ascendente.join(", "));
}