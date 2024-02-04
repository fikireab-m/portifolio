import React, { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6"
import { MdOutlineLaunch } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = ({
  projects = [
    {
      name: "ASTU LMS",
      image: "/assets/projects/lms.png",
      desc:
        "ASTU LMS is a learning management system project developed for Adama Science and Technology University. The system is designed to manage the learning process of students and teachers",
    },
    {
      name: "ASTU LMS",
      image: "/assets/projects/lms.png",
      desc:
        "ASTU LMS is a learning management system project developed for Adama Science and Technology University. The system is designed to manage the learning process of students and teachers",
    },
    {
      name: "ASTU LMS",
      image: "/assets/projects/lms.png",
      desc:
        "ASTU LMS is a learning management system project developed for Adama Science and Technology University. The system is designed to manage the learning process of students and teachers",
    },
    {
      name: "ASTU LMS",
      image: "/assets/projects/lms.png",
      desc:
        "ASTU LMS is a learning management system project developed for Adama Science and Technology University. The system is designed to manage the learning process of students and teachers",
    }
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {projects.map((project, index) => (
          <div className="p-2 flex items-stretch" key={index}>
            <div className="card rounded-xl flex flex-col justify-center shadow-md items-center hover:border-blue-500">
              <div>
                <Image
                  className="border-t-2xl rounded-t-2xl"
                  src={project.image}
                  width={500}
                  height={300}
                  alt="project screenshot"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize px-6">
                {project.name}
              </p>
              <p className="px-4 my-2 text-left">{project.desc}.</p>
              <div className="font-medium flex gap-2">
                <button className="font-medium tracking-wide px-2 text-blue-500 bg-white-500 outline-none rounded-full hover:border border-blue-500 transform transition all duration-500 hover:shadow-blue">
                  <FaGithub className="w-8 h-8" />
                </button>
                <button className="font-medium tracking-wide px-2 text-blue-500 bg-white-500 outline-none rounded-full hover:border border-blue-500 transform transition all duration-500 hover:shadow-blue">
                  <MdOutlineLaunch className="w-8 h-8" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <FaArrowLeft className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <FaArrowRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
