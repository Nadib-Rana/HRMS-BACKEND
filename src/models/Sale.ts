// models/Sale.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISale extends Document {
  medicines: { medicineId: string; quantity: number; price: number }[];
  total: number;
  customerName?: string;
  discount: Number ;
  createdAt: Date;
}

const SaleSchema = new Schema<ISale>({
  medicines: [
    {
      medicineId: { type: Schema.Types.ObjectId, ref: "Medicine", required: true, },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  customerName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ISale>("Sale", SaleSchema);
