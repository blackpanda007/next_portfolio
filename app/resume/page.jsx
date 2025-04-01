"use client";

import PageWrapper from "@/components/PageWrapper";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiMysql,
  SiTensorflow,
  SiApachehadoop,
  SiApachespark,
  SiTableau,
  SiTypescript,
  SiPytorch,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am an MSc Big Data Science graduate with expertise in Frontend Development using Next.js and Tailwind, along with strong skills in Data Visualization (Tableau, PowerBI) and Machine Learning. I have experience working with Big Data tools like Apache Spark and Hadoop and have developed various data-driven projects, including brain tumor detection, Ethereum transaction analysis, and meme spread analysis. As a freelancer, I have designed web overlays and chat services, achieving high client satisfaction. My research contributions include studies on brain tumor detection and IoT-based EV charging stations.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Satyam Kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-966-4482286",
    },
    {
      fieldName: "Github",
      fieldValue: "blackpanda007",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "satyamkr.work@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bengali, Bhojpuri, Japanese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have experience building data-driven applications using modern frontend frameworks like Next.js and Tailwind, along with expertise in data science and big data technologies. My work includes projects in machine learning, blockchain analysis, and network visualization, utilizing tools like Apache Spark, TensorFlow, and Tableau. Additionally, as a freelance web designer, I have created overlays for live streamers and web-based chat services, ensuring high-quality and user-friendly designs.",
  items: [
    {
      company: "Fiverr Freelancing Ltd.",
      position: "Web Design Freelancer",
      duration: "2021- 2024",
    },
    {
      company: "TalkEsports Media & Broadcating",
      position: "eSports Media Intern",
      duration: "Summer 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Queen Mary University of London",
      degree: "MSc. in Computer Science (Big Data Science)",
      duration: "Sept '22 - Jan '24",
    },
    {
      institution: "Visvesvaraya Technological University",
      degree: "B.Engg in Electronics and Communication",
      duration: "Aug '18 - Aug '22",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <SiSvelte />,
      name: "svelte.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiApachehadoop />,
      name: "Apache Hadoop",
    },
    {
      icon: <SiApachespark />,
      name: "Apache Spark",
    },
    {
      icon: <SiTableau />,
      name: "Tableau",
    },

    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { jetbrains } from "@/components/fonts";

const Resume = () => {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row lg:px-3 gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent
                value="experience"
                className={`${jetbrains.className} w-full`}
              >
                <div className="flex flex-col gap-[40px] text-center h-fit xl:text-left backdrop-blur-sm rounded-xl">
                  <h3 className="text-4xl text-black/80 font-bold px-3 ">
                    {experience.title}
                  </h3>
                  <p className="max-w-[600px] text-black/80 font-bold px-3 pb-3 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-black/80 h-[150px] w-full  rounded-xl flex flex-col justify-center items-center gap-2"
                          >
                            <span className="text-green-400">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3 ">
                              {/* dot */}
                              <span className="w-[8px] h-[8px] rounded-full bg-green-300"></span>
                              <p className="text-white">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent
                value="education"
                className={`${jetbrains.className} w-full`}
              >
                <div className="flex flex-col gap-[40px] text-center h-fit xl:text-left backdrop-blur-sm rounded-xl">
                  <h3 className="text-4xl text-black/80 font-bold px-3 ">
                    {education.title}
                  </h3>

                  <ScrollArea>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-black/80 h-[150px] w-full  rounded-xl flex flex-col justify-center items-center gap-2"
                          >
                            <span className="text-green-400">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3 ">
                              {/* dot */}
                              <span className="w-[8px] h-[8px] rounded-full bg-green-300"></span>
                              <p className="text-white">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent
                value="skills"
                className={`${jetbrains.className} w-full h-full`}
              >
                <div className="flex flex-col gap-[30px] text-center h-fit xl:text-left backdrop-blur-sm rounded-xl">
                  <div>
                    <h3 className="text-4xl text-black/80 font-bold px-3 ">
                      {skills.title}
                    </h3>
                    <p className="max-w-[600px] text-black/80 font-bold px-3 pb-3 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-3 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-black/80 rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-green-500 transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* about */}
              <TabsContent
                value="about"
                className={`${jetbrains.className} w-full text-center xl:text-left`}
              >
                <div className="flex flex-col gap-[40px] text-center h-fit xl:text-left backdrop-blur-sm rounded-xl">
                  <h3 className="text-4xl text-black/80 font-bold px-3 ">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-black/80 font-bold px-3 pb-3 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 max-w-fit gap-6 p-3 mx-auto xl:grid-cols-2 xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4 px-2 min-w-[300px]  max-w-[400px] bg-black/80 rounded-md"
                        >
                          <span className="text-green-400">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default Resume;
