import Image from "next/image";
import Link from "next/link";

import Marquee from "@/components/molecules/Marquee";
import { Button } from "@/components/ui/button";

import FundableHero from "../../../../public/svgs/fundableHero.svg";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Hero = () => {
  return (
    <header className="text-center container">
      <div className="hidden md:inline-block h-[4rem]">
        <TextHoverEffect text="FUNDABLE" />
      </div>

      <h1 className="font-syne text-5xl md:leading-[6rem] md:text-8xl font-bold">
        Refining automated <br /> payments in web3
      </h1>
      <p className="font-inter md:text-xl my-4 tracking-wide">
        One stop solution for subscriptions, giveaways, salaries, SIPs and more
        automated <br /> payments in web3.
      </p>
      <div className="flex flex-col justify-center items-center relative">
        <div className="absolute space-x-4 md:space-x-8 md:top-40">
          <Link href="#" className="z-10">
            <Button
              className="bg-fundable-deep-purple hover:bg-fundable-purple"
              size="md"
            >
              Get Started
            </Button>
          </Link>

          <Link href="#" className="z-10">
            <Button
              variant="secondary"
              size="md"
              className="bg-fundable-dark hover:text-black hover:border-black text-white dark:hover:bg-white dark:hover:border-none"
            >
              Discover More
            </Button>
          </Link>
        </div>

        <Image src={FundableHero} alt="Fundable hero image" priority />

        <div className="absolute  bg-black dark:bg-black hidden md:block h:8 md:h-32 w-full bottom-0" />
      </div>

      <Marquee />
    </header>
  );
};

export default Hero;
