// controllers/purchaseController.ts
import { Request, Response } from "express";
import Purchase from "../models/Purchase";
import Medicine from "../models/Medicine";

export const getPurchases = async (req: Request, res: Response) => {
  try {
    const purchases = await Purchase.find().populate("medicines.medicineId", "name");
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch purchases" });
  }
};

export const createPurchase = async (req: Request, res: Response) => {
  try {
    const { supplierName, medicines } = req.body;
    let total = 0;

    for (const item of medicines) {
      const med = await Medicine.findById(item.medicineId);
      if (!med) return res.status(404).json({ error: "Medicine not found" });

      med.stock += item.quantity;
      await med.save();
      total += item.quantity * item.price;
    }

    const purchase = new Purchase({ supplierName, medicines, total });
    await purchase.save();
    res.status(201).json(purchase);
  } catch (err) {
    res.status(500).json({ error: "Purchase creation failed" });
  }
};
