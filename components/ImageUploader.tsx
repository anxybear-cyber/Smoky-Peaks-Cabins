
import React from 'react';

interface ImageUploaderProps {
  cabinId: string;
  onImageAdd: (cabinId: string, base64: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ cabinId, onImageAdd }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageAdd(cabinId, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-stone-300 rounded-lg bg-stone-100/50 hover:bg-stone-100 transition-all">
      <label className="cursor-pointer flex flex-col items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Add Actual Photo</span>
        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
      </label>
    </div>
  );
};

export default ImageUploader;
