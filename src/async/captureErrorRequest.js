import fetch from "node-fetch";

const runCode = async () => {
  try {
    const url = "https://domain-api-com";
    const response = await fetch(url);
    console.log(response);
  } catch (ex) {
    throw new Error("API Not Found");
  }
};

export default {
  runCode,
};
