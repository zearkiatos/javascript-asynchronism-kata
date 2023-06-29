import fetch from "node-fetch";
import { isUrl } from "../utils/validator";

const runCode = async (url) => {
  try {
    if (!isUrl(url)) throw new Error("Invalid URL");

    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (ex) {
    console.log(ex.message);
    if (ex.message === "Invalid URL") throw ex;
    throw new Error("Something was wrong");
  }
};

export default {
  runCode,
};
