// controllers/reportController.ts
import { Request, Response } from "express";
import Sale from "../models/Sale";
import Medicine from "../models/Medicine";

export const salesReport = async (req: Request, res: Response) => {
  try {

    const { start, end } = req.query;
    const sales = await Sale.find({
      createdAt: {
        $gte: new Date(start as string),
        $lte: new Date(end as string),
      },
      
    });
    console.log(sales);
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: "Failed to generate sales report" });
  }
};

export const stockReport = async (req: Request, res: Response) => {
  try {
    const { threshold = 5 } = req.query;
    const lowStock = await Medicine.find({ stock: { $lte: Number(threshold) } });
    res.json(lowStock);
  } catch (err) {
    res.status(500).json({ error: "Failed to generate stock report" });
  }
};
