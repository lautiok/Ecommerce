import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"

dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "ecommerce",
        transformation: [
            { width: 600, height: 600, crop: "limit" }, 
            { quality: 80 }, 
            { fetch_format: "webp" } 
          ]
        });
      };
      
      export const deleteImage = async (public_id) => {
        return await cloudinary.uploader.destroy(public_id);
      };