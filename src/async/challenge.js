import fetch from "node-fetch";

const fetchData = async (urlApi) => {
  try {
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
  } catch (ex) {
    console.log(`Error: ${ex}`);
    throw ex;
  }
};

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (ex) {
    throw ex;
  }
};

export { fetchData, anotherFunction };
