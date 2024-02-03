import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline.";

const qualities = [
  "Strong problem-solving skills",
  "Attention to detail",
  "Ability to learn and adapt",
  "Good communication skills",
  "Teamwork and collaboration",
  "Creativity and innovation",
  "Time management and organization",
  "Strong work ethics",
]
const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-center justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed text-gray-400">
            Who am I ?
          </h3>
          <p className="my-2 text-black-500">   
          My name is <strong>Fikireab Mekuriaw</strong>, and I'm a <strong>Software Engineer</strong> with:
          </p>
          <ul className="text-black-500 self-start list-inside ml-8 mb-4">
            {qualities.map((quality, index) => (
              <motion.li
                className="relative circle-check custom-list cursor-pointer"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={quality}
                whileHover={{
                scale : 1.05,
                transition: {
                  duration: 0.3
                }
                }}>
                  {quality}
              </motion.li>
              )
            )}
          </ul>
          <ButtonOutline>View CV</ButtonOutline>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default About;
