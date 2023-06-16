function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2);
}

function callSetTimeout() {
  setTimeout(() => {
    console.log("Hello JavaScript");
  }, 2000);
}

function execCallback(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

export default {
  sum,
  calc,
  callSetTimeout,
  execCallback,
};
