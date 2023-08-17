/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. */

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));


while (isNaN(num1) || isNaN(num2)) {
  alert("Você não digitou um número em uma das caixinhas. Tente novamente.");
  num1 = Number(prompt("Digite um número: "));
  num2 = Number(prompt("Digite outro número: "));
}

function sum(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function rest(num1, num2) {
  return num1 % num2;
}

function sumIsEven(num1, num2) {
  if ((num1 + num2) % 2 === 0) {
    return "A soma dos dois números é par.";
  } else {
    return "A soma dos dois números é ímpar.";
  }
}

function isEquals(num1, num2) {
  if (num1 === num2) {
    return "Os dois números são iguais.";
  } else {
    return "Os dois números são diferentes.";
  }
}

alert(`
A soma entre ${num1} e ${num2} é: ${sum(num1, num2).toFixed(2)}
`);

alert(`
A subtração entre ${num1} e ${num2} é: ${subtraction(num1, num2).toFixed(2)}
`);

alert(`
A multiplicação entre ${num1} e ${num2} é: ${multiplication(num1, num2).toFixed(2)}
`);

alert(`
A divisão entre ${num1} e ${num2} é: ${division(num1, num2).toFixed(2)}
`);

alert(`
O resto da divisão entre ${num1} e ${num2} é: ${rest(num1, num2).toFixed(0)}
`);

alert(sumIsEven(num1, num2));
alert(isEquals(num1, num2));
