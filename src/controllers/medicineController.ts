// controllers/medicineController.ts
import { Request, Response } from "express";
import Medicine from "../models/Medicine";

export const getMedicines = async (req: Request, res: Response) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch medicines" });
  }
};

export const createMedicine = async (req: Request, res: Response) => {
  try {
    console.log("Hit for create medicin");
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).json(medicine);
    console.log(medicine);
  } catch (err) {
    res.status(500).json({ error: "Failed to create medicine" });
  }
};

export const updateMedicine = async (req: Request, res: Response) => {
  try {
    console.log("hit medicine for update");
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medicine) return res.status(404).json({ error: "Medicine not found" });
    res.json(medicine);
    console.log(medicine)
  } catch (err) {
    res.status(500).json({ error: "Failed to update medicine" });
  }
};

export const deleteMedicine = async (req: Request, res: Response) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) return res.status(404).json({ error: "Medicine not found" });
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete medicine" });
  }
};
