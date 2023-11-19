import express from "express";
import { getAreaInfo, listAreas } from "../controllers/event-controller.js";

export const router = express.Router();

// Routes here
router.route("/areas/").get(listAreas);
router.route("/details/:area").get(getAreaInfo);
