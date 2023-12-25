import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Projects from "./Projects";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              What I do
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Here are some of the services I provide:
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="card rounded-xl flex flex-col justify-start items-center hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div>
                  <Image
                  className="border-t-2xl rounded-t-lg"
                    src="/assets/uiux.jpg"
                    width={500}
                    height={500}
                    alt="UI/UX design"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize px-6">
                  UI/UX Design
                </p>
                <p className="px-4 text-left text-black-500">
                  Visually appealing., Intuitive, User-friendly, Engaging and interactive, Innovative, and Unique designs.
                </p>
                <button className="card-button bg-orange-500">
                  Here me
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="card  rounded-xl flex flex-col justify-start items-center hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div>
                  <Image
                  className="border-t-2xl rounded-t-lg"
                    src="/assets/front-end.jpg"
                    width={500}
                    height={500}
                    alt="front-end development"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize px-6">
                  Front-end Development
                </p>
                <p className="px-4 text-left text-black-500">
                  Responsive, Accessible, Fast loading speed, Consistent across all pages, Scalable, Easy to navigate
                </p>
                <button className="card-button bg-orange-500">
                  Here me
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="card rounded-xl flex flex-col justify-start items-center hover:border-orange-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div>
                <Image
                  className="border-t-2xl rounded-t-lg"
                    src="/assets/back-end.jpg"
                    width={500}
                    height={500}
                    alt="back-end development"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize px-6">
                  Back-end Development
                </p>
                <p className="px-4 text-left text-black-500">
                Scalable and efficient,
                  Secure and reliable, and
                  Easy to integrate with other systems.
                </p>
                <button className="card-button bg-orange-500">
                  Here me
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Projects
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Some of the projects I have worked on
            </motion.p>
          </ScrollAnimationWrapper>
        </div>
        <div className="w-full" id="projects">
          <ScrollAnimationWrapper className="w-full flex flex-col">
            <motion.div variants={scrollAnimation}>
              <Projects />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }} id="contact">
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Don't Forget<br /> To Reach Out
                  </h5>
                  <p>Let's bring your ideas to life!</p>
                </div>
                <ButtonPrimary>Contact</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
