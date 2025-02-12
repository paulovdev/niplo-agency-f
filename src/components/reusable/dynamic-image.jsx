"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function DynamicImage({
  src,
  alt = "",
  width,
  height,
  className = "",
  blurDataURL = "",
}) {
  const [blur, setBlur] = useState(blurDataURL);

  useEffect(() => {
    if (!blur && src) {
      const loadImage = async () => {
        const res = await fetch(src);
        const imgBlob = await res.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result;
          setBlur(base64String);
        };

        reader.readAsDataURL(imgBlob);
      };

      loadImage();
    }
  }, [src, blur]);

  if (!blur) return <div></div>;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={true}
      className={className}
      placeholder="blur"
      blurDataURL={blur}
    />
  );
}

export default DynamicImage;
