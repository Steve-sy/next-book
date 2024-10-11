"use client";

import { Image } from "@nextui-org/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderHome({
  images,
  slidesPerView,
}: {
  images: { src: string }[];
  slidesPerView: number;
}) {
  return (
    <div className="cursor-pointer">
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: slidesPerView,
            spaceBetween: 15,
          },
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Autoplay, Pagination, Navigation]}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <Image alt={`Image ${index}`} src={image.src} width="100%" />
                <span className="pt-2">{"Nuclear War"}</span>
                <span className="text-gray-400">{"Rebecca Yarros"}</span>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No images</p>
        )}
      </Swiper>
    </div>
  );
}
