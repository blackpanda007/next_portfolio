"use client";

import PageWrapper from "@/components/PageWrapper";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import { jetbrains } from "@/components/fonts";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    catagory: "Machine Learning",
    title: "Detection of Brain tumor",
    description:
      "I developed and implemented deep learning models (CNN, ResNet, VGG16) for brain tumor detection from MRI scans, achieving an 80.73% accuracy with the CNN model. I preprocessed and analyzed over 2,000 MRI scans using image augmentation techniques (e.g., average and Laplacian filters), enhancing feature extraction and model robustness. Additionally, I evaluated the AI models based on accuracy, sensitivity, and specificity, optimizing early tumor diagnosis to potentially improve clinical decision-making in neuro-oncology.",
    stack: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "matplotlib" },
    ],
    image: "/assets/work/thumb1.jpg",

    github: "https://github.com/blackpanda007/Detection-of-Brain-tumor",
  },
  {
    num: "02",
    catagory: "Big Data Processing",
    title: "Ethereum Data Analysis",
    description:
      "I implemented Big Data processing techniques with Apache Spark to analyze Ethereum transactions and smart contracts, achieving a 40% reduction in data processing time. Using Matplotlib, I developed data-driven visualizations to track transaction trends, scam activities, and gas price fluctuations, enhancing insights into blockchain behaviors. Additionally, I performed advanced data joins and aggregations to identify the top 10 smart contracts and active miners, leveraging Spark's reduceByKey and takeOrdered methods for optimized analysis.",
    stack: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "matplotlib" },
    ],
    image: "/assets/work/thumb2.jpg",

    github: "https://github.com/blackpanda007/Ethereum-Data-Analysis",
  },
  {
    num: "03",
    catagory: "Machine Learning",
    title: "Sound Analysis using ML model",
    description:
      "I developed an SVM-based machine learning pipeline to classify audio segments from London, achieving 57.48% accuracy by extracting over 45 audio features like MFCCs and spectral features using Librosa.Using Python, scipy, numpy, and scikit-learn, I optimized the model with cross-validation and hyperparameter tuning, addressing data imbalance for improved generalization.Model performance was visualized and assessed with matplotlib, seaborn, confusion matrices, and key metrics, ensuring robust results.",
    stack: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "matplotlib" },
      { name: "scikit-learn" },
      { name: "librosa" },
      { name: "scipy" },
      { name: "seaborn" },
    ],
    image: "/assets/work/thumb3.jpg",
    github: "https://github.com/blackpanda007/Sound-Analysis-using-ML-model",
  },
  {
    num: "04",
    catagory: "Network Analysis and Visualization",
    title: "Analyze the spread of memes on Reddit",
    description:
      "I developed an SVM-based machine learning pipeline to classify audio segments from London, achieving 57.48% accuracy by extracting over 45 audio features like MFCCs and spectral features using Librosa.Using Python, scipy, numpy, and scikit-learn, I optimized the model with cross-validation and hyperparameter tuning, addressing data imbalance for improved generalization.Model performance was visualized and assessed with matplotlib, seaborn, confusion matrices, and key metrics, ensuring robust results.",
    stack: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "matplotlib" },
      { name: "scikit-learn" },
      { name: "librosa" },
      { name: "scipy" },
      { name: "seaborn" },
    ],
    image: "/assets/work/thumb4.jpg",
    github: "https://github.com/blackpanda007",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currenIndex = swiper.realIndex;
    //update project state based on current slide index
    setProject(projects[currenIndex]);
  };
  return (
    <PageWrapper>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${jetbrains.className} min-h-[80vh] flex flex-col justify-center py-12 px-3 rounded-xl xl:px-0`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-black/80">
                {/* outline number */}
                <div className="text-8xl font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* project title */}
                <h3 className="text-3xl font-bold leading-loose text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h3>
                {/* project catagory */}
                <p className="text-white italic">{project.catagory}</p>
                {/* project description */}
                <p className="text-white">{project.description}</p>
                {/* stack */}
                <ul className="flex flex-wrap gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-lg text-green-300">
                        {item.name}
                        {/* remove the last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20 "></div>
                {/* button */}
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  {/* <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-green-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link> */}
                  {/* github project button */}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center cursor-pointer items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-green-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
                loop={true}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center rounded-xl bg-amber-200">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover rounded-xl"
                            alt="project thumbnail"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-green-300 hover:bg-green-200 cursor-pointer text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
};

export default Projects;
