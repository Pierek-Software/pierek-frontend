// ReviewPages.js

import Link from "next/link";
import React from "react";

const ReviewPages = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Reviews</h2>
      <div className="mt-5">
        <Link href={"/reviews/best-gaming-laptops"}>
          <div className="w-full bg-gradient-to-r from-secondary to-primary p-10 text-white hover:underline">
            <h2 className="mb-2 text-xl font-bold lg:text-2xl">
              Best gaming laptops in 2024: Power and portability in one. The
              cream of the crop!
            </h2>
            <p className="text:md lg:text-lg">
              2024's top gaming laptops revealed! Explore Lenovo Legion Pro 7i,
              Gigabyte G5, and Razer Blade 15. Expert reviews for the ultimate
              gaming experience.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReviewPages;
