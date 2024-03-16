"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  publicId: string;
  onPublicIdChange: (publicId: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  publicId,
  onPublicIdChange,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      console.log("from cloudinary = ", result);
      onChange(result.info.secure_url);
      onPublicIdChange(result.info.public_id);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="szgvqj6v"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus size={50} />
            <div className="text-semibold text-lg">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={value}
                  alt="upload"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
