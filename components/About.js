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
      className="max-w-screen-2xl pt-8 mb-6 sm:pt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 content-center gap-8 my-16">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/illustration2.jpg"
              alt="Dev Illustrasi"
              layout="responsive"
              quality={50}
              height={508}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-center justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed text-blue-500">
              Who am I ?
            </h3>
            <motion.p
              className="relative leading-7 py-4 mb-4 text-justify"
              custom={{ duration: 2 }}
              variants={scrollAnimation}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3
                }
              }}>
              Hello, I'm Fikireab Mekuriaw, a seasoned software engineer with hands-on experience dedicated to crafting exceptional digital products. My journey began with a love for problem-solving and has evolved into a passion for turning ideas into elegant, efficient, and scalable solutions. I approach software engineering as an art form, blending creativity and precision to build impactful digital experiences. Adapting to the rapid pace of technology is a continuous thrill for me, and I thrive in collaborative environments where diverse perspectives converge to create solutions greater than the sum of their parts. Beyond the code, I love traveling and learning the languages and cultures of others, believing that a well-rounded life enhances creativity.
            </motion.p>
            <ButtonOutline>View CV</ButtonOutline>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default About;
