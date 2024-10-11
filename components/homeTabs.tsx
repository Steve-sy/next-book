"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/react";
import SliderHome from "./sliderHome";

export default function HomeTabs() {
  const bestSelling = [
    { src: "/assets/images/book_01.jpg" },
    { src: "/assets/images/book_02.jpg" },
    { src: "/assets/images/book_03.jpg" },
    { src: "/assets/images/book_04.jpg" },
    { src: "/assets/images/book_05.jpg" },
    { src: "/assets/images/book_06.jpg" },
    { src: "/assets/images/book_07.jpg" },
    { src: "/assets/images/book_08.jpg" },
    { src: "/assets/images/book_09.jpg" },
  ];

  const trendingEbooks = [
    { src: "/assets/images/ebook_01.jpg" },
    { src: "/assets/images/ebook_02.jpg" },
    { src: "/assets/images/ebook_03.jpg" },
    { src: "/assets/images/ebook_04.jpg" },
    { src: "/assets/images/ebook_05.jpg" },
    { src: "/assets/images/ebook_06.jpg" },
    { src: "/assets/images/ebook_07.jpg" },
    { src: "/assets/images/ebook_08.jpg" },
    { src: "/assets/images/ebook_09.jpg" },
    { src: "/assets/images/ebook_10.jpg" },
  ];

  return (
    <div className="flex flex-col max-auto">
      <Tabs
        aria-label="Options"
        className="mx-auto" // Responsive font sizes for different screens
        color="secondary"
      >
        <Tab
          key="photos"
          title="Bestselling Audiobooks"
          className="px-1 sm:px-2 md:px-1 lg:px-6 text-xs md:text-sm"
        >
          <div>
            <SliderHome slidesPerView={6} images={bestSelling} />
          </div>
        </Tab>
        <Tab
          key="music"
          title="News & Trending Ebooks"
          className="px-1 sm:px-2 md:px-1 lg:px-6 text-xs md:text-sm"
        >
          <div>
            <SliderHome slidesPerView={4} images={trendingEbooks} />
          </div>
        </Tab>
        <Tab
          key="videos"
          title="Fan-Favorite Audiobooks"
          className="px-1 sm:px-2 md:px-1 lg:px-6 text-xs md:text-sm"
        >
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
