// routes/purchaseRoutes.ts
import { Router } from "express";
import { getPurchases, createPurchase } from "../controllers/purchaseController";

const router = Router();

router.get("/", getPurchases);
router.post("/", createPurchase);

export default router;
