import { avatarPlaceholderUrl } from "@/constants";
import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image";
import React from "react";


const Thumbnail = ({
  url,
  imageClassName,
  className,
  
}) => {


  return (
    <figure className={cn('thumbnail', className)}>
      <Image
        src={url || avatarPlaceholderUrl }
        alt="thumbnail"
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassName,
        "thumbnail-image"
        )}
      />
      
    </figure>
  );
};

export default Thumbnail;
