"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import PageWrapper from "@/components/PageWrapper";
import { jetbrains } from "@/components/fonts";

const Home = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/resume.pdf";
    downloadLink.download = "Satyam_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <PageWrapper>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-24 pl-0">
            {/* text */}
            <div
              className={`${jetbrains.className} text-black xl:text-white text-center xl:text-left order-2 xl:order-none`}
            >
              <span className="text-xl bg-gradient-to-b from-green-500 to-green-200 pb-3 text-transparent bg-clip-text font-extrabold">
                Data Scientist | FrontEnd Developer
              </span>
              <h1 className="h2 mb-6 mt-2">
                Hello I'm <br />
                <span className="h1 text-green-500 [text-shadow:_10px_3px_8px_#000000]">
                  SATYAM KUMAR
                </span>
              </h1>
              <p className="max-w-[500px] mb-9 ">
                Big Data Science graduate skilled in building data-driven,
                user-focused applications. I blend frontend development
                <strong className="text-green-500">
                  {" "}
                  (Next.js, Tailwind)
                </strong>{" "}
                with machine learning and big data tools{" "}
                <strong className="text-green-500"> (Spark, Hadoop) </strong> to
                create smart, scalable solutions. From detecting brain tumors
                with deep learning to analyzing Ethereum transactions and meme
                trends, I love solving real-world problems through code and
                design.
              </p>
              <p className="font-bold bg-gradient-to-b from-green-500 to-green-200 pb-3 text-transparent bg-clip-text">
                Based in India | Remote-friendly
              </p>
              {/* download button and socials */}
              <div className="flex flex-col xl:flex-row  items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 text-lg text-white hover:shadow-[0_0_15px_rgba(102,255,0,0.7)] hover:border-green-500 transition-all duration-300 "
                  onClick={handleDownload}
                >
                  <span className="font-bold text-lg">Download CV</span>
                  <FiDownload />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6 "
                    iconStyles="w-9 h-9 border border-accent rounded-sm
                     flex justify-center items-center text-xl hover:bg-black hover:text-primary transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none ">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </PageWrapper>
  );
};

export default Home;
