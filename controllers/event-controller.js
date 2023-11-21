import httpClient from "../utils/httpClient.js";
import console from "hvb-console";

// stubs
export const listAreas = async (req, res) => {
  console.log("awawa");
  const response = await httpClient({
    method: "GET",
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
    method: "GET",
    endpoint: `/details/${area}`,
    area,
  });
  res.status(response.statusCode).json(response);
};

export const postTickets = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(500).json({ success: false, message: "Invalid body" });
    return;
  }
  console.info(req.body);
  const response = await httpClient({
    method: "POST",
    endpoint: `/tickets`,
    body: req.body,
  });
  res.status(response.statusCode).json(response);
};

export const getTickets = async (req, res) => {
  const response = await httpClient({
    method: "GET",
    endpoint: `/tickets`,
  });
  res.status(response.statusCode).json(response);
};

export const deleteTicket = async (req, res) => {
  const id = req.params.id;
  const response = await httpClient({
    method: "DELETE",
    endpoint: `/tickets/${id}`,
  });
  res.status(response.statusCode).json(response);
};

