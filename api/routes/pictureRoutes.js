
import express from 'express';
import { pictureUploadController } from '../controllers/pictureController.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Cloudinary par jis folder mein aapne pictures save karni hain
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'], // Jo formats aap allow karna chahte hain
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      return file.fieldname + '-' + uniqueSuffix;
    }
  },
});

const upload = multer({ storage: storage })





router.post('/uploadprofilepic', upload.single("profilePic"), pictureUploadController);

export default router;
