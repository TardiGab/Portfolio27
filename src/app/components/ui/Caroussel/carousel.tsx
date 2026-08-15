"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";

export default function Carousel({
  images,
  alt,
}: {
  images: string;
  alt: string;
}) {
  const imageArray = images.split(",");
  return (
    <Swiper
      slidesPerView={2}
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
    >
      {imageArray.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={alt} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
