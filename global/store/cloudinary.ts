import apiKey from '../../api.json'
export const cloudinaryAPI = apiKey?.cloudinaryApiKey
const cloudName = apiKey?.cloudName
export const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`; 
export const CLOUDINARY_UPLOAD_PRESET = "InstagramClone";