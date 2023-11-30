// function changeEven(numbers, value) {
//   const updatedNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       updatedNumbers.push(numbers[i] + value);
//     } else {
//       updatedNumbers.push(numbers[i]);
//     }
//   }

//   return updatedNumbers
// }
// console.log(changeEven)

// 

/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

console.log(checkBrackets(someFn));

checkBrackets(someFn){

  
};