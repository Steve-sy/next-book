// components/Hero.tsx
"use client";
import React from "react";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { PiBookOpenUserFill } from "react-icons/pi";
import { HiBookOpen } from "react-icons/hi2";

import { title } from "@/components/primitives";

const Hero: React.FC = () => {
  return (
    <section className="inline-block max-w-3xl text-center justify-center pb-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <div className="space-y-5">
            <HiBookOpen
              className="mx-auto mb-5 text-white rounded-2xl p-2 bg-gradient-to-b from-orange-400 to-orange-600"
              size={80}
            />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to&nbsp;
              <span className={title({ color: "violet" })}>
                Next Book&nbsp;
              </span>
            </h1>
            <p className="max-w-full text-gray-500 md:text-xl dark:text-gray-400">
              Apple Books is the single destination to find, buy, and dive into
              audiobooks and ebooks. Browse curated collections and get
              personalized recommendations. Share your books with up to five
              family members.* All with no subscription or monthly commitment.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
              prefetch={false}
            >
              Get Started
              <MdKeyboardDoubleArrowRight className="ml-1" size={19} />
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
              prefetch={false}
            >
              Button
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
