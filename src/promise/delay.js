const delay = (time, message) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });

export { delay };
