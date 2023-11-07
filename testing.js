function changeEven(numbers, value) {
  const updatedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      updatedNumbers.push(numbers[i] + value);
    } else {
      updatedNumbers.push(numbers[i]);
    }
  }

  return updatedNumbers
}
console.log(changeEven)



