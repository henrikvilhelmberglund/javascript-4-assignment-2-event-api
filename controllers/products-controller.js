import httpClient from "../utils/httpClient.js";
import console from "hvb-console";

// stubs
export const listProducts = async (req, res) => {
  console.log("awawa");
  const response = await httpClient({
    endpoint: "/products",
    jsonServerEndpoint: "/products",
  });
  res.status(response.statusCode).json(response);
};

export const searchProducts = async (req, res) => {
  const query = req.params.query;
  const response = await httpClient({
    endpoint: `/products`,
    jsonServerEndpoint: "/products",
    query,
  });
  console.error("SEARCH PRODUCTS");
  console.error(response);
  res.status(response.statusCode).json(response);
};

export const getProduct = async (req, res) => {
  if (req.params.id === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Bad request, id is missing" });
    return;
  }
  console.error("GET SINGLE PRODUCT");
  const id = req.params.id;
  const response = await httpClient({
    endpoint: `/products/${id}`,
    id,
    jsonServerEndpoint: `/products/${id}`,
  });
  res.status(response.statusCode).json(response);
};
