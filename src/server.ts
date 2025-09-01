import express, { Request, Response } from "express";
import cors from "cors";

import medicineRoutes from "./routes/medicineRoutes";
import saleRoutes from "./routes/saleRoutes";
import purchaseRoutes from "./routes/purchaseRoutes";
import reportRoutes from "./routes/reportRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript + MongoDB!");
});

// API routes
app.use("/api/medicines", medicineRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/reports", reportRoutes);

export default app;
