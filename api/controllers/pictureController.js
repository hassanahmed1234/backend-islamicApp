import User from "../models/User.js";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/pictureUpload.js'; // 👈 direct import

export const pictureUploadController = async (req, res) => {


  try {
    // req.file.path ab local path nahi hoga, balkay direct cloudinary ka URL hoga!
   

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_pictures"
    });

    console.log("CLOUDINARY RESULT:", result);
    
   

    const imageUrl = result.secure_url; // ✅ ye frontend ko bhejna hai


    const updatedUser = await User.findByIdAndUpdate(
      req.body?.userId,
      { image: imageUrl },
      { new: true }
    );
    res.json({ message: "Uploaded to Cloud successfully!", image: imageUrl });
  } catch (error) {
    console.log('hellooooo')
    res.status(500).json({ error: error.message });
  }
}