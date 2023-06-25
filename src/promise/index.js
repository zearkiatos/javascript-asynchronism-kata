const promise = () =>
  new Promise((resolve, reject) => {
    resolve("hey!");
  });

const cows = 15;

const countCows = (cowsQuantity = cows) =>
  new Promise(function (resolve, reject) {
    if (cowsQuantity > 10) {
        resolve(`We have ${cows} cows 🐮 in the farm`);
    }
    else {
        reject("There are not enough cows 🐮 in the farm")
    }
  });

export { promise, countCows };
