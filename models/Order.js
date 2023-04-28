import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 300,
    },
    total: {
      type: Number,
      required: true,
      maxlength: 32,
    },
    status: {
      type: Number,
      required: true,
    },
    method: {
      type: Number,
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
