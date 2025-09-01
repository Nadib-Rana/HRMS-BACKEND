// models/Medicine.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IMedicine extends Document {
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
  createdAt: Date;
}

const MedicineSchema = new Schema<IMedicine>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IMedicine>("Medicine", MedicineSchema);
