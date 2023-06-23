const functionAsync = (condition = true) =>
  new Promise((resolve, reject) => {
    condition
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Some error ocurred! 🤯"));
  });

const asyncResolved = () => functionAsync();

const asyncRejected = () => functionAsync(false);

export { asyncResolved, asyncRejected };
