import { CLOUDINARY_UPLOAD_PRESET, cloudName } from "../store/cloudinary";

export const handleUpload = async (base64: string, fileType = 'image', setProgress: any) => {
  if (!base64) return;

  const mimePrefix = fileType === 'video' ? 'video/mp4' : 'image/jpeg';
  const CLOUDINARY_URL = fileType === 'video'
    ? `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
    : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append('file', `data:${mimePrefix};base64,${base64}`);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', CLOUDINARY_URL, true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(Math.round(percentComplete));
      }
    };
    xhr.onerror = () => {
      console.error('Network error:', xhr.statusText);
      reject(`Network error: ${xhr.statusText}`);
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response.secure_url);
        } catch (error) {
          console.error('Error parsing response:', error);
          reject('Error parsing response');
        }
      } else {
        console.error('Upload failed with status:', xhr.status);
        reject(`Upload failed with status ${xhr.status}`);
      }
    };

    xhr.send(formData);
  });
};
