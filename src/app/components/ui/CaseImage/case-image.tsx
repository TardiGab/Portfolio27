"use client";

import Image from "next/image";
import { useState } from "react";
import RollingLink from "../RollingLink/rolling-link";

export default function CaseImage({
  src,
  alt,
  caption,
  link,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  link?: string;
  className?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <figure className={`w-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="cursor-pointer rounded-lg"
          onClick={() => setSelectedImage(src)}
        />
        {caption && (
          <figcaption className="mt-2 text-[1rem]">
            {link ? (
              <RollingLink
                label={caption}
                href={link}
                target="_blank"
                arrow="outwards"
                iconPosition="right"
                className="font-sans text-base"
                color="white"
              />
            ) : (
              caption
            )}
          </figcaption>
        )}
      </figure>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-[80vh] w-[80vw]">
            <Image
              src={selectedImage}
              alt={alt}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
