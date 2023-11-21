import fetch from "node-fetch";
import console from "hvb-console";

export const fetchData = async ({ endpoint, method, body = null }) => {
  // reset response
  const response = {
    status: "Error",
    statusCode: 404,
    data: undefined,
    error: "Unknown error",
  };

  let url = `${process.env.BASE_URL}${endpoint}`;

  console.log(body);

  const options = {
    method,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      // authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: body ? JSON.stringify(body) : null,
  };
  console.log("endpoint", endpoint);
  const result = await fetch(url, options);

  if (result.status === 200) {
    let data = await result.json();
    response.status = "Success";
    response.statusCode = 200;
    response.data = data;
    response.error = undefined;
  } else if (result.status === 201) {
    let data = await result.json();
    response.status = "Success: Added data";
    response.statusCode = 201;
    response.data = data;
    response.error = undefined;
  } else if (result.status === 404) {
    console.error("result", result);
    response.status = "Error";
    response.error = `Could not find the data`;
    return response;
  } else {
    console.log(result.status);
    return response;
  }

  return response;
};

export default fetchData;
