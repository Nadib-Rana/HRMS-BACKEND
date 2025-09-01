// routes/reportRoutes.ts
import { Router } from "express";
import { salesReport, stockReport } from "../controllers/reportController";

const router = Router();

router.get("/sales", salesReport);
router.get("/stock", stockReport);

export default router;
