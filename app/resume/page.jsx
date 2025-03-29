"use client";

import PageWrapper from "@/components/PageWrapper";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Satyam Kumar",
    },
    {
      fieldName: "",
      fieldValue: "Satyam Kumar",
    },
  ],
};

const Resume = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto">
        <div>resume page</div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
