import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: { type: String, default: "" } // Image URL yahan save hoga
});

export default mongoose.model('User', userSchema);