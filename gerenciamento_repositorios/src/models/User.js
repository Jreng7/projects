import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

   // campos
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },

    password: {
      type: String,
      required: true,
    }
  },

  // CONFIG do Model. Preenchido automaticamente pelo mongoDB
  {
    timestamps: true
  }
)

export default mongoose.model('User', userSchema)
