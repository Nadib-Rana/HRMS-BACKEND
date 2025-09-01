// routes/saleRoutes.ts
import { Router } from "express";
import { getSales, createSale } from "../controllers/saleController";

const router = Router();

router.get("/", getSales);
router.post("/", createSale);

export default router;
