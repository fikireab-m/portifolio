import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto bg-white"
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-400 sm:text-4xl pb-8 transform transition-all duration-500 ease-in-out hover:tracking-wide hover:font-bold hover:text-blue-500">
              Hi 👋, I'm Fikireab.
            </h1>
            <h1 className="title-text text-6xl lg:text-7xl font-bold text-blue-500 transform transition-all duration-500 ease-in-out hover:tracking-widest">
              A software engineer.
            </h1>
            <p className="py-8 text-xl font-semibold text-gray-500">I can help you bring your ideas to life</p>
            <ButtonPrimary><a href="#contact">Let's Chat</a></ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="dev illustration"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
