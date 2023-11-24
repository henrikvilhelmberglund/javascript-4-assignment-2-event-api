import httpClient from "../utils/httpClient.js";
import console from "hvb-console";

// stubs
export async function listAreas(req, res) {
  const response = await httpClient({
    method: "GET",
    endpoint: "/areas",
  });
  res.status(response.statusCode).json(response);
}

export async function getAreaInfo(req, res) {
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
}

export async function postTickets(req, res) {
  if (Object.keys(req.body).length === 0) {
    console.error(`Received POST with empty body from ${req.ip}`);
    res.status(500).json({ success: false, message: "Invalid body" });
    return;
  }

  if (req.body.ticketAmount < 1) {
    console.error(`Received POST with invalid ticket amount from ${req.ip}`);
    res.status(500).json({
      success: false,
      message: "Invalid body - invalid ticket amount",
    });
    return;
  }

  const response = await httpClient({
    method: "POST",
    endpoint: `/tickets`,
    body: req.body,
  });
  res.status(response.statusCode).json(response);
}

export async function getTickets(req, res) {
  const response = await httpClient({
    method: "GET",
    endpoint: `/tickets`,
  });
  res.status(response.statusCode).json(response);
}

export async function deleteTicket(req, res) {
  const id = req.params.id;
  const response = await httpClient({
    method: "DELETE",
    endpoint: `/tickets/${id}`,
  });
  res.status(response.statusCode).json(response);
}
