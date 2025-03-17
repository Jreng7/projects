import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

  {
    email: { type: String, trim: true, required: true, index: {unique: true} },
    password: { type: String, trim: true, required: true, select: false }
  },

  // CONFIG do Model. Preenchido automaticamente pelo mongoDB
  {
    timestamps: true
  }
)

export default mongoose.model('User', userSchema)
