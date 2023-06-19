import { XMLHttpRequest } from "xmlhttprequest";
import httpStatusCodes from 'http-status-codes';

function fetchData(urlApi, callback) {
  let http = new XMLHttpRequest();
  http.open("GET", urlApi, true);
  http.onreadystatechange = function (event) {
    if (http.readyState === 4) {
        if(http.status === httpStatusCodes.OK) {
            callback(null, JSON.parse(http.responseText))
        }
        else {
            const error = new Error(`Error ${urlApi}`);
            return callback(error, null);
        }
    }
    else {
      const error = new Error(`Error ${urlApi}`);
      return callback(error, null);
  }
  };
  http.send();
}

export default {
  fetchData,
};
