// models/Purchase.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IPurchase extends Document {
  supplierName: string;
  medicines: { medicineId: string; quantity: number; price: number }[];
  total: number;
  createdAt: Date;
}

const PurchaseSchema = new Schema<IPurchase>({
  supplierName: { type: String, required: true },
  medicines: [
    {
      medicineId: { type: Schema.Types.ObjectId, ref: "Medicine", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPurchase>("Purchase", PurchaseSchema);
