import fetch from "node-fetch";

const postData = (urlApi, data) => {
  const options = {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(urlApi, options);
};

export { postData };
