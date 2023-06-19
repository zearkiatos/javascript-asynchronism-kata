import challenge from "./challenge";
import config from "../config";

challenge.fetchData( `${config.PLATZI_FAKE_API_BASE_URL}/products`, (error, data) => {
  if (error) return console.error(error);
  challenge.fetchData(
    `${config.PLATZI_FAKE_API_BASE_URL}/products/${data[0].id}`,
    (error2, data2) => {
      if (error2) return console.error(error2);
      challenge.fetchData(
        `${config.PLATZI_FAKE_API_BASE_URL}/categories/${data2?.category?.id}`,
        (error3, data3) => {
          if (error3) return console.error(error);
          console.log(data[0]);
          console.log(data2.title);
          console.log(data3.name);
        }
      );
    }
  );
});
