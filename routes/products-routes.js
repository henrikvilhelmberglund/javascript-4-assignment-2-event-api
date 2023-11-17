import express from "express";
import {
  listProducts,
  searchProducts,
  getProduct,
} from "../controllers/products-controller.js";

export const router = express.Router();

// Routes here
router.route("/products/:query").get(searchProducts);
router.route("/products/").get(listProducts);
router.route("/product/:id").get(getProduct);
