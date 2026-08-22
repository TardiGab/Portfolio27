"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";
import Image from "next/image";

export default function Carousel({
  images,
  alt,
  slidesPerView = 2,
}: {
  images: string;
  alt: string;
  slidesPerView?: number;
}) {
  const imageArray = images.split(",");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: slidesPerView,
            spaceBetween: 16,
          },
        }}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        grabCursor={true}
        className="mt-6 mb-6"
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={alt}
              className="rounded-lg"
              onClick={() => setSelectedImage(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
