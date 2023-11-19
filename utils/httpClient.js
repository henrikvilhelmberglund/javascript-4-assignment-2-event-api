import fetch from "node-fetch";
import console from "hvb-console";

export const fetchData = async ({ endpoint, area = null }) => {
  // reset response
  const response = {
    status: "Error",
    statusCode: 404,
    data: undefined,
    error: "Unknown error",
  };

  let url = `${process.env.BASE_URL}${endpoint}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // authorization: `Bearer ${process.env.TOKEN}`,
    },
  };
  console.log("endpoint", endpoint);
  const result = await fetch(url, options);

  if (result.status === 200) {
    let data = await result.json();
    response.status = "Success";
    response.statusCode = 200;
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
