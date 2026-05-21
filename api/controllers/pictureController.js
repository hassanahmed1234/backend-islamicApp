import User from "../models/User.js";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/pictureUpload.js'; // 👈 direct import

export const pictureUploadController = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    const imageUrl = req.file.path; // ✅ Cloudinary URL already here

    const updatedUser = await User.findByIdAndUpdate(
      req.body?.userId,
      { image: imageUrl },
      { new: true }
    );

    res.json({
      message: "Uploaded successfully!",
      image: imageUrl
    });

  } catch (error) {
    console.log("UPLOAD ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};