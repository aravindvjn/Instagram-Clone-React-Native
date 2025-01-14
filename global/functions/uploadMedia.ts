import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from "../store/cloudinary";

export const handleUpload = async (base64: string) => {
  if (!base64) return;

  const formData = new FormData();
  formData.append('file', `data:image/jpeg;base64,${base64}`);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status ${response?.status}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch {
    return false
  }
};
