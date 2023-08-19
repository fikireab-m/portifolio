import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

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
    },
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
    <div id="projects">
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {projects.map((project, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="card rounded-xl flex flex-col justify-center items-center hover:border-orange-500">
                <div>
                <Image
                  className="border-t-2xl rounded-t-2xl"
                    src={project.image}
                    width={500}
                    height={500}
                    alt="project screenshot"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize px-6">
                  {project.name}
                </p>
                <p className="px-4 my-2 text-left">{project.desc}.</p>
                <button className="project-button bg-orange-500">
                  View Project
                </button>
              </div>

          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
