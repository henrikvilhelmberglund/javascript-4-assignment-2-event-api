import fetch from "node-fetch";
import console from "hvb-console";

export const fetchData = async ({
  endpoint,
  query = null,
  id = null,
  jsonServerEndpoint,
}) => {
  // reset response
  const response = {
    status: "Error",
    statusCode: 404,
    data: undefined,
    error: "Unknown error",
  };

  let url = `${process.env.BASE_URL}${jsonServerEndpoint}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // authorization: `Bearer ${process.env.TOKEN}`,
    },
  };
  console.log("endpoint", endpoint);
  if (endpoint === "/products") {
    const result = await fetch(url, options);
    if (result.status === 200) {
      let data = await result.json();
      response.status = "Success";
      response.statusCode = 200;
      response.data = data;

      // Search
      if (query) {
        console.log("length", data.length);
        data = data.filter((product) => {
          console.log(product.name.toLowerCase().search(query.toLowerCase()));
          return product.name.toLowerCase().search(query.toLowerCase()) !== -1;
        });
        response.data = data;
        if (data.length === 0) {
          response.status = "Error";
          response.statusCode = 404;
          response.data = undefined;
          response.error = `Search gave 0 results`;
        }
      }
      return response;
    } else if (result.status === 404) {
      console.error("result", result);
      response.status = "Error";
      response.error = `Could not find any products`;
      return response;
    } else {
      console.log(result.status);
      return response;
    }
  } else if (endpoint === `/products/${id}`) {
    const result = await fetch(url, options);

    if (result.status === 200) {
      let data = await result.json();
      if (data.length === 0) {
        response.status = "Error";
        response.data = undefined;
        response.error = `Could not find a product with the ID ${id}.`;
      } else {
        response.status = "Success";
        response.statusCode = 200;
        response.data = data;
        response.error = undefined;
      }

      return response;
    } else if (result.status === 404) {
      console.error("result", result);
      response.status = "Error";
      response.data = undefined;
      response.error = `Could not find a product with the ID ${id}.`;
      return response;
    } else {
      console.log(result.status);
      return response;
    }
  }

  return response;
};

export default fetchData;
