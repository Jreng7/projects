import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
  
  { 
    name: { type: String, trim: true, required: true },
    url: { type: String, required: true, unique: true, trim: true }, 
    userId: { type: String, required: true }
  },

  { timestamps: true }
  
) 

export default mongoose.model('Repository', repositorySchema)