"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HomeParallax() {
  const images = [
    { src: "/assets/images/iphone_01.png", speed: 5 },
    { src: "/assets/images/iphone_02.png", speed: 10 },
    { src: "/assets/images/iphone_03.png", speed: 5 },
    { src: "/assets/images/iphone_04.png", speed: 10 },
    { src: "/assets/images/iphone_05.png", speed: 5 },
  ];

  return (
    <ParallaxProvider>
      <div className="container flex gap-4 mx-auto justify-center align-middle overflow-hidden py-10 max-w-[1600px]">
        {images.map((image, index) => (
          <Parallax key={index} speed={image.speed}>
            <Image
              alt="app"
              className="drop-shadow-[10px_10px_10px_rgba(0,0,0,0.25)]"
              src={image.src}
            />
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  );
}
