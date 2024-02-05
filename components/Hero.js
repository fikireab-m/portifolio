import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl px-8 xl:px-16 mx-auto bg-white"
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}>
          <div className="sm:mt-24 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-400 sm:text-4xl pb-8 transform transition-all duration-500 ease-in-out hover:tracking-wide hover:font-bold hover:text-blue-500">
              Hi 👋, I'm Fikireab.
            </h1>
            <h1 className="title-text text-6xl lg:text-7xl font-bold text-blue-500 transform transition-all duration-500 ease-in-out hover:tracking-widest">
              A software engineer.
            </h1>
            <p className="py-8 text-xl font-semibold text-gray-500">
              I can help you bring your ideas to life. <br />
              Elevate your digital experience with me.
            </p>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              duration={1000} onSetActive={() => {
                setActiveLink("");
              }}>
              <button
                className="relative px-8 rounded-full bg-gradient-to-br from-blue-600 to-sky-600 isolation-auto z-10 text-xl py-3 px-8 lg:px-16 rounded-full tracking-normal text-white shadow-none transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-sky-500 hover:text-2xl hover:font-bold hover:tracking-widest before:absolute before:w-full before:transition-all before:duration-1000 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-sky-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-1000">
                Let's Talk
              </button>
            </LinkScroll>
          </div>
          <div className="mt-8 flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="dev illustration"
                quality={100}
                width={612}
                height={612}
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
