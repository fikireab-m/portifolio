import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Projects from "./Projects";
import Card from "./Card";
import LinkedIn from "../public/assets/Icon/icons8-linkedin.svg";
import Github from "../public/assets/Icon/icons8-github.svg";
import Instagram from "../public/assets/Icon/instagram.svg";
import Facebook from "../public/assets/Icon/facebook.svg";

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
      imgurl: "/assets/services/mobiledev.png",
      tools: ["Flutter", "Java", "Firebase"]
    },
    {
      title: "Front-end Development",
      desc: `Responsive, Fast loading, Consistent, and Scalable`,
      imgurl: "/assets/services/frontend.png",
      tools: ["HTML5", "CSS3", "Javascript", "React js", "Tailwind Css", "Material UI"],
    },
    {
      title: "Backend Development",
      desc: `Scalable, Secure, Reliable, and Easy to integrate`,
      imgurl: "/assets/services/backend.png",
      tools: ["Node js", "Express js", "Mongo DB", "My SQL", "Django", "Python"]
    }
  ]
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div id="services" className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400 leading-relaxed"
            >
              What I do ?
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 content-center gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {
              services.map((service, index) => (
                <Card>
                  <ScrollAnimationWrapper key={index} className="flex justify-center">
                    <motion.div
                      variants={scrollAnimation}
                      className="rounded-xl flex flex-col justify-start items-center hover:border-orange-500"
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
                          src={service.imgurl}
                          width={300}
                          height={300}
                          alt={service.title}
                        />
                      </div>
                      <p className="text-lg text-gray-600 font-medium capitalize px-6">
                        {service.title}
                      </p>
                      <p className="px-2 text-gray-600 text-center">
                        {service.desc}
                      </p>
                    </motion.div>
                  </ScrollAnimationWrapper>
                </Card>
              ))
            }
          </div>
        </div>
        <div id="projects" className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400 leading-relaxed mx-auto">
              Projects
            </motion.h3>
            <motion.p className="mx-auto pt-2" variants={scrollAnimation}>
              Some of the projects I have worked on
            </motion.p>
          </ScrollAnimationWrapper>
        </div>
        <div className="w-full">
          <ScrollAnimationWrapper className="w-full flex flex-col">
            <motion.div variants={scrollAnimation}>
              <Projects />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }} id="contact">
              <div className="absolute rounded-xl py-8 px-6 sm:px-12 lg:px-16 w-full flex flex-col justify-center items-center z-10 bg-white-500">
                <div className="pb-4">
                  <h5 className="text-gray-600 text-xl">
                    Don't Forget To Reach Out
                  </h5>
                  <h5 className="text-4xl text-gray-400 font-bold pt-2">Let's Chat</h5>
                </div>
                <div className="flex">
                  <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                    <a href="https://www.linkedin.com/in/fikireab-m-332b09236/" target="_blank" rel="noopener noreferrer">
                      <LinkedIn className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                    <a href="https://github.com/fikireab-m" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                    <a href="https://www.facebook.com/crash.override.o/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                    <a href="https://www.instagram.com/fikireab1/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
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
