import React from "react";

const FaqSection = () => {
  return (
    <section className="container mx-auto lg:-mt-36">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="font-syne text-3xl text-center sm:text-left lg:text-6xl font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-sm md:text-lg tracking-wider lg:leading-[1.875rem] text-[#6F717E] text-balance">
          Get the answers you need to navigate our platform with confidence.
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
