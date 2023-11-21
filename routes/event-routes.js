import express from "express";
import {
  deleteTicket,
  getAreaInfo,
  getTickets,
  listAreas,
  postTickets,
} from "../controllers/event-controller.js";

export const router = express.Router();

// Routes here
router.route("/areas/").get(listAreas);
router.route("/details/:area").get(getAreaInfo);
router.route("/tickets/").post(postTickets);
router.route("/tickets/").get(getTickets);
router.route("/tickets/:id").delete(deleteTicket);
