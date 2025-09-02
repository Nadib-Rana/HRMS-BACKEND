import express, { Request, Response } from "express";
import cors from "cors";
const bodyParser = require("body-parser");


import medicineRoutes from "./routes/medicineRoutes";
import saleRoutes from "./routes/saleRoutes";
import purchaseRoutes from "./routes/purchaseRoutes";
import reportRoutes from "./routes/reportRoutes";
import authRoutes from "./routes/auth";
import protectedRoutes from "./routes/protected";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript + MongoDB!");
});

// API routes
app.use("/api/medicines", medicineRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);


export default app;
