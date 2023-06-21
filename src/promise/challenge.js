import fetch from "node-fetch";

const fetchData = (apiUrl) => {
  return fetch(apiUrl);
};

const fetchDataMultiply = (apiUrl) =>
  fetchData(`${apiUrl}/products`)
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      return fetchData(`${apiUrl}/products/${products[0].id}`);
    })
    .then((response) => response.json())
    .then((product) => {
      console.log(product.title);
      return fetchData(`${apiUrl}/categories/${product.category.id}`);
    })
    .then((response) => response.json())
    .then((category) => {
      console.log(category.name);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally"));

export { fetchData, fetchDataMultiply };
