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

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}
