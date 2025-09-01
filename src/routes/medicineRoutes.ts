// routes/medicineRoutes.ts
import { Router } from "express";
import { getMedicines, createMedicine, updateMedicine, deleteMedicine } from "../controllers/medicineController";

//   /api/medicines
const router = Router();

router.get("/", getMedicines);
router.post("/", createMedicine);
router.put("/:id", updateMedicine);   // add this
router.patch("/:id", updateMedicine); // keep this
router.delete("/:id", deleteMedicine);


export default router;
