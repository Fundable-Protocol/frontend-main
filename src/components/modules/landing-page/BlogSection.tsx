"use client";

import { type CarouselApi } from "@/components/ui/carousel";

import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import BlogCarouselWrapper from "./BlogCarouselWrapper";

const BlogSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  const handlePrev = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="container mx-auto relative">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-syne text-2xl md:text-3xl lg:text-5xl font-bold">
          Read From <br />
          Our Blog
        </h1>
        <span className="flex gap-x-1 text-fundable-white">
          <CircleChevronLeft
            size="3rem"
            className="cursor-pointer text-fundable-grey"
            onClick={handlePrev}
          />
          <CircleChevronRight
            size="3rem"
            className="cursor-pointer"
            onClick={handleNext}
          />
        </span>
      </div>

      <BlogCarouselWrapper setApi={setApi} />

      {/* <Image
        src={star}
        alt="star"
        className="absolute object-cover w-[27%] h-auto -bottom-[40%] right-[20%] -z-10"
      /> */}
    </section>
  );
};

export default BlogSection;
