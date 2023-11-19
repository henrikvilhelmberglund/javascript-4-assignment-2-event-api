import httpClient from "../utils/httpClient.js";
import console from "hvb-console";

// stubs
export const listAreas = async (req, res) => {
  console.log("awawa");
  const response = await httpClient({
    endpoint: "/areas",
  });
  res.status(response.statusCode).json(response);
};

export const getAreaInfo = async (req, res) => {
  if (req.params.area === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Bad request, area is missing" });
    return;
  }
  const area = req.params.area;
  const response = await httpClient({
    endpoint: `/details/${area}`,
    area,
  });
  res.status(response.statusCode).json(response);
};
