import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/event-routes.js";
import console from "hvb-console";

dotenv.config();

const app = express();

// Setting middleware
app.use(cors());
app.use(express.json());
// API base URL here
app.use("/api/v1", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
