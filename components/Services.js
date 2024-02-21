import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Projects from "./Projects";
import Card from "./Card";
import { FaLinkedin } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const services = [
    {
      title: "UI/UX Design",
      desc: `Visually appealing, User-friendly, and Innovative`,
      imgurl: "/assets/services/uiux1.png",
      tools: ["Figma", "Adobe XD", "Adobe Photoshop"]
    },
    {
      title: "Mobile Application Development",
      desc: `Beautiful cross-platform mobile applications`,
      imgurl: "/assets/services/mobiledev1.png",
      tools: ["Flutter", "Java", "Firebase"]
    },
    {
      title: "Front-end Development",
      desc: `Responsive, Fast loading, Consistent, and Scalable`,
      imgurl: "/assets/services/frontend.png",
    },
    {
      title: "Backend Development",
      desc: `Scalable, Secure, Reliable, and Easy to integrate`,
      imgurl: "/assets/services/backend.png",
      tools: ["Node js", "Express js", "Mongo DB", "My SQL", "Django", "Python"]
    }
  ]
  return (
    <div id="services"
      className="w-full bg-gradient-to-b from-gray-100 to-white py-14">
      <div className="flex flex-col justify-center w-full px-4 mx-auto text-center max-w-screen-2xl lg:px-8">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl font-bold leading-relaxed text-blue-500 sm:text-3xl lg:text-4xl">
              What I do ?
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="grid content-center grid-flow-row grid-cols-1 gap-8 px-2 pt-4 pb-8 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:pb-12 lg:pt-8 lg:px-8">
            {
              services.map((service, index) => (
                <ScrollAnimationWrapper key={index} className="flex justify-center">
                  <Card >
                    <motion.div
                      variants={scrollAnimation}
                      className="flex flex-col items-center justify-start rounded-xl"
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          duration: .2
                        }
                      }}>
                      <div>
                        <Image
                          src={service.imgurl}
                          width={300}
                          height={300}
                          alt={service.title}
                        />
                      </div>
                      <p className="px-6 text-lg font-medium text-gray-500 capitalize">
                        {service.title}
                      </p>
                      <p className="px-2 text-sm text-center">
                        {service.desc}
                      </p>
                    </motion.div>
                  </Card>
                </ScrollAnimationWrapper>
              ))
            }
          </div>
        </div>
        <div id="projects" className="flex flex-col w-full my-8">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="mx-auto text-2xl font-bold leading-relaxed text-blue-500 sm:text-3xl lg:text-4xl">
              Projects
            </motion.h3>
            <motion.p className="pt-4 mx-auto text-xl font-thin text-gray-500" variants={scrollAnimation}>
              Here are some of the projects I have worked on:
            </motion.p>
          </ScrollAnimationWrapper>
        </div>
        <div className="w-full">
          <ScrollAnimationWrapper className="flex flex-col w-full">
            <motion.div variants={scrollAnimation}>
              <Projects />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }} id="contact">
              <div className="absolute z-10 flex flex-col items-center justify-center w-full px-6 py-8 bg-gray-100 rounded-xl sm:px-12 lg:px-16">
                <div className="pb-4">
                  <h5 className="text-xl text-blue-600">
                    Don't Forget To Reach Out
                  </h5>
                  <h5 className="pt-4 text-4xl font-bold text-gray-600">Let's Chat</h5>
                </div>
                <div className="flex">
                  <div className="flex items-center justify-center p-2 mx-2 bg-white rounded-full shadow-lg">
                    <a href="https://www.linkedin.com/in/fikireab-m-332b09236/" target="_blank" rel="noopener">
                      <FaLinkedin className="w-6 h-6 text-blue-500" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center p-2 mx-2 bg-white rounded-full shadow-lg">
                    <a href="https://t.me/fikireab1" target="_blank" rel="noopener">
                      <FaTelegram className="w-6 h-6 text-blue-500" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center p-2 mx-2 bg-white rounded-full shadow-lg">
                    <a href="mailto:fikireab.meku@gmail.com" rel="noopener">
                      <SiGmail className="w-6 h-6 text-blue-500" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center p-2 mx-2 bg-white rounded-full shadow-lg">
                    <a href="https://www.instagram.com/fikireab1/?igsh=YnhlbHo2emQ5cjR1" target="_blank" rel="noopener noreferrer">
                      <FaSquareInstagram className="w-6 h-6 text-blue-500" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 left-0 right-0 w-11/12 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg h-60 sm:h-56"
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
